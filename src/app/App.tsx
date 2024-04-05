import Nav from "../components/Nav";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Main from "../pages/Main";

import Logo from "../components/Logo";

const App = () => {
  enum Page {
    Main,
    Login,
    Home,
  }

  const renderContent = (page: Page) => {
    switch (page) {
      case Page.Home:
        return (
          <>
            <Nav />
            <Logo />
            <Home />
          </>
        );

      case Page.Login:
        return (
          <>
            <Nav />
            <Login />
          </>
        );

      case Page.Main:
        return (
          <>
            <Nav />
            <Main />
          </>
        );
    }
  };
  return (
    <div className="h-screen w-screen bg-gray-100 dark:bg-gray-800">
      {renderContent(Page.Main)}
    </div>
  );
};

export default App;
