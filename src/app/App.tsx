import Nav from "../components/Nav";
import Login from "../pages/Login";
import Home from "../pages/Home";

import Logo from "../components/Logo";

const App = () => {
  const isHome: boolean = false;

  const renderContent = () => {
    if (isHome) {
      return (
        <>
          <Nav />
          <Logo />
          <Home />
        </>
      );
    }
    return (
      <>
        <Nav />
        <Login />
      </>
    );
  };
  return (
    <div className="h-screen w-screen bg-gray-100 dark:bg-gray-800">
      {renderContent()}
    </div>
  );
};

export default App;
