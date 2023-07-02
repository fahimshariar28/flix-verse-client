import { Link, useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Logged In Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="relative">
      <Helmet>
        <title>Login | Flix Verse</title>
      </Helmet>
      <BackgroundImage />
      <div className="absolute top-0 left-0 bg-black-rgba h-screen w-screen">
        <Header signup />
        <div className="mt-5 text-white flex justify-center items-center flex-col">
          <h2 className="text-3xl font-bold">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              className="text-black w-60 border-0 py-2 px-4 rounded-sm mt-3 text-lg block"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
            <input
              className="text-black w-60 border-0 py-2 px-4 rounded-sm mt-3 text-lg block"
              type="password"
              name="password"
              placeholder="********"
            />
            <input
              type="submit"
              value="Login"
              className="px-4 py-2 w-60 bg-red-600 border-0 text-white rounded font-bold text-base cursor-pointer block mt-3"
            />
          </form>
          <p className="mt-5">
            Don&lsquo;t have an account{" "}
            <Link
              className="px-4 py-2 bg-red-600 border-0 text-white rounded font-bold text-base"
              to="/signup"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
