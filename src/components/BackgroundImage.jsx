import backgroundImage from "../assets/login.jpg";

const BackgroundImage = () => {
  return (
    <div>
      <img
        className="w-screen h-screen"
        src={backgroundImage}
        alt="backgroundImage"
      />
    </div>
  );
};

export default BackgroundImage;
