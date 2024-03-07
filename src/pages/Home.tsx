import list from "../assets/images/list.png";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-gradient-image bg-contain bg-no-repeat bg-bottom flex justify-center items-center">
      <section className="isolate w-3/6 h-96 bg-white bg-opacity-40 backdrop-blur-xl rounded ring-2 ring-black/5 flex  justify-around items-center">
        <section className="flex flex-col items-start justify-start">
          <h1 className="text-6xl text-gray-800 font-bold mb-4">TaskForge</h1>
          <h2 className="text-xl text-gray-800 tracking-wide">
            Task Management, <span className="font-medium">enhanced.</span>
          </h2>
        </section>
        <img src={list} className="h-48 w-48 animate-bounce-slow" />
      </section>
    </div>
  );
};

export default Home;
