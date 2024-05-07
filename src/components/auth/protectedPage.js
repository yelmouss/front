import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ProtectedPage() {
  const redirection = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      redirection("/login");
      return
    }
    try {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        redirection("login");
      }
    } catch (e) {
      localStorage.removeItem("token");
      redirection("login");
    }
  });

  return <div>protectedPage</div>;
}

export default ProtectedPage;
