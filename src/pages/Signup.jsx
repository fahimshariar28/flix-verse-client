import { Link, useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Account Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
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
        <title>Signup | Flix Verse</title>
      </Helmet>
      <BackgroundImage />
      <div className="absolute top-0 left-0 bg-black-rgba w-screen h-screen flex flex-col gap-4 text-center text-white">
        <Header login />
        <div className="">
          <div>
            <h1 className="text-6xl font-bold  lg:px-96">
              Unlimited Movies, TV Shows and many more
            </h1>
            <h4 className="text-3xl font-bold mt-2">
              Watch anywhere, cancel anytime
            </h4>
            <h6 className="text-xl font-bold mt-2">
              Ready to watch. Enter your email to create or restart membership.
            </h6>
          </div>
          <div className="mt-2">
            <form
              className="flex flex-col gap-3 md:flex-row md:gap-0 items-center justify-center"
              onSubmit={handleSignup}
            >
              <input
                className="text-black border-0 p-7 h-20 w-60 text-lg"
                type="email"
                name="email"
                placeholder="Enter Your Email"
              />
              <input
                className="text-black border-0 p-7 h-20 w-60 text-lg"
                type="password"
                name="password"
                placeholder="********"
              />
              <input
                type="submit"
                value="Get Started"
                className="px-5 py-7 h-20 w-60 lg:w-36 bg-red-600 border-0 text-white font-bold text-base cursor-pointer"
              />
            </form>
            <p className="mt-5">
              Already Have an account{" "}
              <Link
                className="px-4 py-2 bg-red-600 border-0 text-white rounded font-bold text-base"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
