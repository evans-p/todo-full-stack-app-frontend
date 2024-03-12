import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="h-screen w-screen bg-gradient-image bg-contain bg-no-repeat bg-bottom flex justify-center items-center">
      <section className="w-96 h-96 bg-white bg-opacity-40 backdrop-blur-xl rounded ring-2 ring-black/5">
        <h2 className="text-4xl text-gray-800 mt-10 mb-4 tracking-wider text-center">
          Welcome to
        </h2>
        <h1 className="text-6xl text-gray-800 font-bold tracking-wide text-center">
          TaskForge
        </h1>
        <button className="w-80 mx-auto mt-16 rounded-full bg-white hover:bg-gray-100 py-2 px-4 shadow-md hover:shadow-xl flex items-center justify-center">
          <FcGoogle className="text-2xl mr-3" />
          <span className="text-xl font-semibold">Login with Google</span>
        </button>
      </section>
    </div>
  );
};

export default Login;
