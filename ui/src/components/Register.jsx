import React from "reactn";
import RegisterUserForm from '../components/RegisterUserForm';

const Register = () => {
  return (
    <div>
      <h1>Register:</h1>
      <RegisterUserForm redirect="/Home" />
    </div>
  )
}

export default Register;