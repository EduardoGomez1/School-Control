import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ruta = "http://localhost:8000/api/register";

const RegisterUser = () => {
    const HEADERS = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("user-info")}`,
        },
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(
            ruta,
            {
                name: name,
                email: email,
                password: password,
            },
            HEADERS
        );
        navigate("/showUser");
    };

    return (
        <Container>
            <div className="text-center">
                <h3 className="text-center">Nuevo Usuario</h3>
                <form onSubmit={store}>
                    <div className="mb-3">
                        <label>Nombre</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="form-control text-center"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Correo Electronico</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="form-control text-center"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Contraseña</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control text-center"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn btn-success btn-lg mt-2 mb-2 text-white"
                        >
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    );
};
export default RegisterUser;
