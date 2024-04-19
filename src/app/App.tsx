import { lazy } from "react";

const Nav = lazy(() => import("../components/Nav"));
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../pages/Main"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Logo = lazy(() => import("../components/Logo"));
const ThemeProvider = lazy(() => import("../providers/ThemeProvider"));

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
