import { Container } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Login() {

const rediriger = useNavigate()

  const initialState = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`http://localhost:3001/api/login`, {
        username: formData.username,
        password: formData.password,
      });

      localStorage.setItem('token', response.data.token)

      rediriger('/dashboard')
    //   alert("Connected successfully");
    } catch (e) {
      console.error(e);
    //   alert("connexion error check console");
    }
  };

  return (
    <Container>
      <div>
        <form className="flex flex-col bg-blue-500 p-9 gap-5">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </Container>
  );
}

export default Login;
