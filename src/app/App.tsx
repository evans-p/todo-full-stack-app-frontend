import Nav from "../components/Nav";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Main from "../pages/Main";

import Logo from "../components/Logo";
import ThemeProvider from "../providers/ThemeProvider";

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
    <div>
      <ThemeProvider>{renderContent(Page.Home)}</ThemeProvider>
    </div>
  );
};

export default App;
