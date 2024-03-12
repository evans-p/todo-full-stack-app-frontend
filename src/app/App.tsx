import Nav from "../components/Nav";
import Login from "../pages/Login";
import Home from "../pages/Home";

const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-100">
      <Nav />
      <Home />
      {/* <Login /> */}
    </div>
  );
};

export default App;
