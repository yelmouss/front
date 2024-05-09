import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminPanel from "./AdminPanel";
function ProtectedPage() {
  const redirection = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      redirection("/login");
      return;
    }
    try {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        redirection("login");
      }

      setProfile(decodedToken);
    } catch (e) {
      localStorage.removeItem("token");
      redirection("login");
    }
  });

  return (
    <div>
      {profile ? (
        <div>
          <h1>Welcome, {profile.Fullname || "User"}!</h1>
          <p>Email: {profile.username}</p>

          {profile.isAdmin ? (
            <>
              <AdminPanel />
            </>
          ) : (
            "Vous ête un utilisateur"
          )}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default ProtectedPage;
