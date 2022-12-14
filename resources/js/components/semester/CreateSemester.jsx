import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ruta = "http://localhost:8000/api/semester_insert";
const ruta3 = "http://localhost:8000/api/career_index";

const defaultSelectValue = "---";

const CreateSemester = () => {
    const HEADERS = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("user-info")}`,
        },
    };

    const [idCareer, setIdCareer] = useState("");
    const [name, setName] = useState("");
    const [period, setPeriod] = useState("");
    const navigate = useNavigate();

    const [career, setCareer] = useState([]);

    const store = async (e) => {
        e.preventDefault();
        await axios.post(
            ruta,
            {
                idCareer: idCareer,
                name: name,
                period: period,
            },
            HEADERS
        );
        navigate("/showSemeste");
    };

    useEffect(() => {
        const getAllCareer = async () => {
            const response = await axios.get(ruta3, HEADERS);
            setCareer(response.data);
            //console.log(response.data);
        };

        getAllCareer();
    }, []);

    const handle = function (e) {
        const option = e.target.value;
        console.log(option);

        setIdCareer(option);
    };

    return (
        <Container>
            <div>
                <h3 className="text-center">Nuevo Semestre</h3>
                <form onSubmit={store}>
                    <div className="text-center">
                        <div className="mb-3">
                            <b>
                                <label className="form-label">Carrera</label>
                            </b>
                            <select
                                name="Users"
                                className="form-control text-center"
                                onClick={handle}
                            >
                                {career.map((career) => (
                                    <option key={career.id} value={career.id}>
                                        {career.name}{" "}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <b>
                                <label className="form-label">Nombre</label>
                            </b>
                            <select
                                className="form-control text-center"
                                id="name"
                                name="name"
                                defaultValue={name}
                                style={{
                                    color:
                                        name === defaultSelectValue
                                            ? "gray"
                                            : "black",
                                }}
                                onChange={(e) => setName(e.target.value)}
                            >
                                <option>{defaultSelectValue}</option>
                                <option>Primero</option>
                                <option>Segundo</option>
                                <option>Tercero</option>
                                <option>Cuarto</option>
                                <option>Quinto</option>
                                <option>Sexto</option>
                                <option>Septimo</option>
                                <option>Octabo</option>
                                <option>Noveno</option>
                                <option>Decimo</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <b>
                                <label className="form-label">Periodo</label>
                            </b>
                            <select
                                className="form-control text-center"
                                id="period"
                                name="period"
                                defaultValue={period}
                                style={{
                                    color:
                                        period === defaultSelectValue
                                            ? "gray"
                                            : "black",
                                }}
                                onChange={(e) => setPeriod(e.target.value)}
                            >
                                <option>{defaultSelectValue}</option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-success btn-lg mt-2 mb-2 text-white"
                        >
                            Registrar
                        </button>
                        <Link to="/showSemeste">
                            <button
                                type="button"
                                className="btn btn-danger btn-lg mt-2 mb-2 text-white"
                            >
                                Cancelar
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default CreateSemester;
