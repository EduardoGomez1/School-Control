import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ruta = "http://localhost:8000/api";
const ShowSchool = () => {
    const token = localStorage.getItem('user-info');
    const HEADERS = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${ token }`,
        },
    };

    const [schools, setSchools] = useState([]);

    useEffect(() => {
        getAllSchools();
    }, []);

    const getAllSchools = async () => {
        const response = await axios.get(`${ruta}/school_index`,HEADERS);
        setSchools(response.data);
        //console.log(response.data);
    };

    const deleteSchools = async (id) => {
        await axios.post(`${ruta}/school_delete/${id}`, {}, HEADERS);
        getAllSchools();
    };

    return (
        <div className="text-center">
            <table className="table table-striped mb-3">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>id</th>
                        <th>Clave</th>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {schools.map((school) => (
                        <tr key={school.id}>
                            <td> {school.id} </td>
                            <td> {school.clave} </td>
                            <td> {school.name} </td>
                            <td> {school.address} </td>
                            <td> {school.tel} </td>
                            <td> {school.email} </td>
                            <td>
                                <Link
                                    to={`/editSchool/${school.id}`}
                                    className="btn btn-warning"
                                >
                                    Editar
                                </Link>
                                <button
                                    onClick={() => deleteSchools(school.id)}
                                    className="btn btn-danger"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="gap-2">
                <Link
                    to="/createSchool"
                    className="btn btn-success btn-lg mt-2 mb-2 text-white"
                >
                    Registrar Nueva Escuela
                </Link>
                <Link to="/HomePage">
                    <button
                        type="button"
                        className="btn btn-primary btn-lg mt-2 mb-2 text-white"
                    >
                        Regresar
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ShowSchool;
