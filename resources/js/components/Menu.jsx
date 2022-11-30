import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";

import HomePage from "./HomePage";

import RegisterUser from "./user/RegisterUser";
import ShowUser from "./user/ShowUser";

import CreateStudent from "./students/CreateStudent";
import EditStudent from "./students/EditStudent";
import ShowStudent from "./students/ShowStudent";

import CreateSchool from "./school/CreateSchool";
import EditSchool from "./school/EditSchool";
import ShowSchool from "./school/ShowSchool";

import CreateCareer from "./Career/CreateCareer";
import EditCareer from "./Career/EditCareer";
import ShowCareer from "./Career/ShowCareer";

import CreateGroup from "./Group/CreateGroup";
import EditGroup from "./Group/EditGroup";
import ShowGroup from "./Group/ShowGroup";

import CreateSemester from "./semester/CreateSemester";
import EditSemester from "./semester/EditSemester";
import ShowSemester from "./semester/ShowSemester";

import CreateSubject from "./Subject/CreateSubject";
import EditSubject from "./Subject/EditSubject";
import ShowSubject from "./Subject/ShowSubject";

import CreateProfessor from "./Professor/CreateProfessor";
import EditProfessor from "./Professor/EditProfessor";
import ShowProfessor from "./Professor/ShowProfessor";

import CreateNotes from "./Notes/CreateNotes";
import EditNotes from "./Notes/EditNotes";
import ShowNotes from "./Notes/ShowNotes";

import Navigation from "./Nav";
import PrivateRoute from "./PrivateRoute";

const Menu = () => {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/Register" element={<Register />} />
                    /** **************************************************** */
                    /** ************************ PRINCIPA **************** */
                    /** **************************************************** */
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route exact path="/HomePage" element={<HomePage />} />
                    </Route>
                    /** **************************************************** */
                    /** ******************** END PRINCIPA **************** */
                    /** **************************************************** */
                    /** **************************************************** */
                    /** ************************ USUARIOS **************** */
                    /** **************************************************** */
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route exact path="/showUser" element={<ShowUser />} />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/createUser"
                            element={<RegisterUser />}
                        />
                    </Route>
                    /** **************************************************** */
                    /** ******************** END USUARIOS **************** */
                    /** **************************************************** */
                    /** **************************************************** */
                    /** ************************ ESTUDIANTES **************** */
                    /** **************************************************** */
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/showStudent"
                            element={<ShowStudent />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/editStudent/:id"
                            element={<EditStudent />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/createStudent"
                            element={<CreateStudent />}
                        />
                    </Route>
                    /** **************************************************** */
                    /** ******************** END ESTUDIANTES **************** */
                    /** **************************************************** */
                    /** **************************************************** */
                    /** ************************ SHCOOL **************** */ /**
                    **************************************************** */
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/showSchool"
                            element={<ShowSchool />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/editSchool/:id"
                            element={<EditSchool />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/createSchool"
                            element={<CreateSchool />}
                        />
                    </Route>
                    /** **************************************************** */
                    /** ******************** END SHCOOL **************** */ /**
                    **************************************************** */ /**
                    /** **************************************************** */
                    /** ************************ CARRERAS **************** */
                    /** **************************************************** */
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/showCareer"
                            element={<ShowCareer />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/editCareer/:id"
                            element={<EditCareer />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/createCareer"
                            element={<CreateCareer />}
                        />
                    </Route>
                    /** **************************************************** */
                    /** ******************** END CARRERAS **************** */
                    /** **************************************************** */
                    /** **************************************************** */
                    /** ************************ GRUPOS **************** */ /**
                    **************************************************** */
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/showGroup"
                            element={<ShowGroup />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/editGroup/:id"
                            element={<EditGroup />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/createGroup"
                            element={<CreateGroup />}
                        />
                    </Route>
                    /** **************************************************** */
                    /** ******************** END GRUPOS **************** */ /**
                    **************************************************** */ /**
                    /** **************************************************** */
                    /** ************************ SEMESTRES **************** */
                    /** **************************************************** */
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/showSemeste"
                            element={<ShowSemester />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/editSemester/:id"
                            element={<EditSemester />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/createSemester"
                            element={<CreateSemester />}
                        />
                    </Route>
                    /** **************************************************** */
                    /** ******************** END SEMESTRES **************** */
                    /** **************************************************** */
                    /** **************************************************** */
                    /** ************************ MATERIAS **************** */
                    /** **************************************************** */
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/showSubject"
                            element={<ShowSubject />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/editSubject/:id"
                            element={<EditSubject />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/createSubject"
                            element={<CreateSubject />}
                        />
                    </Route>
                    /** **************************************************** */
                    /** ******************** END MATERIAS **************** */
                    /** **************************************************** */
                    /** **************************************************** */
                    /** ************************ PROFESORES **************** */
                    /** **************************************************** */
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/showProfessor"
                            element={<ShowProfessor />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/editProfessor/:id"
                            element={<EditProfessor />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/createProfessor"
                            element={<CreateProfessor />}
                        />
                    </Route>
                    /** **************************************************** */
                    /** ******************** END PROFESORES **************** */
                    /** **************************************************** */
                    /** **************************************************** */
                    /** ************************ NOTAS **************** */ /**
                    **************************************************** */
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/showNotes"
                            element={<ShowNotes />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/editNotes/:id"
                            element={<EditNotes />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/createNotes"
                            element={<CreateNotes />}
                        />
                    </Route>
                    /** **************************************************** */
                    /** ******************** END NOTAS **************** */ /**
                    **************************************************** */
                    {/*

                    <PrivateRoute  exact path="/showUser" element={<ShowUser />} />
                    <PrivateRoute  exact path="/createUser" element={<RegisterUser />} />


                    <PrivateRoute  exact path="/showStudent" element={<ShowStudent />} />
                    <PrivateRoute exact path="/editStudent/:id" element={<EditStudent />} />
                    <PrivateRoute  exact path="/createStudent" element={<CreateStudent />} />

                    <PrivateRoute  exact path="/showSchool" element={<ShowSchool />} />
                    <PrivateRoute  exact path="/editSchool/:id" element={<EditSchool />} />
                    <PrivateRoute  exact path="/createSchool" element={<CreateSchool />} />

                    <PrivateRoute  exact path="/showCareer" element={<ShowCareer />} />
                    <PrivateRoute  exact path="/editCareer/:id" element={<EditCareer />} />
                    <PrivateRoute  exact path="/createCareer" element={<CreateCareer />} />

                    <PrivateRoute  exact path="/showGroup" element={<ShowGroup />} />
                    <PrivateRoute  exact path="/editGroup/:id" element={<EditGroup />} />
                    <PrivateRoute  exact path="/createGroup" element={<CreateGroup />} />

                    <PrivateRoute exact path="/showSemeste" element={<ShowSemester />} />
                    <PrivateRoute exact path="/editSemester/:id" element={<EditSemester />} />
                    <PrivateRoute  exact path="/createSemester" element={<CreateSemester />} />

                    <PrivateRoute  exact path="/showSubject" element={<ShowSubject />} />
                    <PrivateRoute  exact path="/editSubject/:id" element={<EditSubject />} />
                    <PrivateRoute  exact path="/createSubject" element={<CreateSubject />} />

                    <PrivateRoute  exact path="/showProfessor" element={<ShowProfessor />} />
                    <PrivateRoute exact path="/editProfessor/:id" element={<EditProfessor />} />
                    <PrivateRoute  exact path="/createProfessor" element={<CreateProfessor />} />

                    <PrivateRoute  exact path="/showNotes" element={<ShowNotes />} />
                    <PrivateRoute exact path="/editNotes/:id" element={<EditNotes />} />
                    <PrivateRoute exact path="/createNotes" element={<CreateNotes />} /> */}
                </Routes>
            </div>
        </Router>
    );
};
export default Menu;
