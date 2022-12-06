import axios from 'axios';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const ruta = 'http://localhost:8000/api/login';

const Login = () => {

  const [formValue, setformValue] = React.useState({
    email: '',
    password: ''
  })


  let navigate = useNavigate();

  const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();

    const formData = new FormData();
    formData.append("email", formValue.email)
    formData.append("password", formValue.password)
    axios.post(ruta,
      formData,
    ).then(response => {

      localStorage.setItem("user-info", response.data.token)
      navigate({

        pathname: "/HomePage",
        state: { token: response.data.token }

      }
      )
    }).catch(error => {
      console.log(error);
      swal({
        title: "No Autorizado",
        text: "Error Al Iniciar Sesión",
        icon: "error",
        buttons: "Aceptar"
      });
    });
  };



  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div className="text-center">
          <h2>BIENVENIDO</h2>
          <h4>INGRESE A LA PLATAFORMA</h4>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" height={'150px'}
          />
        </div>

        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <h4><label>Correo Electronico</label></h4>
          <Form.Control
            className='text-center'
            type="email"
            placeholder="Ingrese su correo electronico"
            name="email"
            value={formValue.email}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 text-center" controlId="formBasicPassword">
          <h4><label>Contraseña</label></h4>
          <Form.Control
            className='text-center'
            type="password"
            placeholder="Ingrese su contraseña"
            name="password"
            value={formValue.password}
            onChange={onChange}
            required />
        </Form.Group>
        <div className="d-grid">
          <Button type="submit" className="btn btn-primary btn-lg">Iniciar Sesión</Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;