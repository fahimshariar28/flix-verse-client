import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className="px-16 flex items-center justify-between">
      <img className="h-20" src={logo} alt="logo" />
      <button
        className="px-4 py-2 bg-red-600 border-0 text-white rounded font-bold text-base"
        onClick={() => navigate(props.login ? "/login" : "/signup")}
      >
        {props.login ? "Log In" : "Sign Up"}
      </button>
    </div>
  );
};

export default Header;
