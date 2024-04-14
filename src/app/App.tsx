import Nav from "../components/Nav";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import Logo from "../components/Logo";
import ThemeProvider from "../providers/ThemeProvider";

const App = () => {
  enum Page {
    Main,
    Login,
    Home,
    NotFound,
  }

  const renderContent = (page: Page): JSX.Element => {
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

      case Page.NotFound:
        return (
          <>
            <Nav />
            <Logo />
            <NotFound />
          </>
        );
    }
  };
  return (
    <div>
      <ThemeProvider>{renderContent(Page.NotFound)}</ThemeProvider>
    </div>
  );
};

export default App;
