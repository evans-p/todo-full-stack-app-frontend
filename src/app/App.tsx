import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ThemeProvider from "../providers/ThemeProvider";
import CredentialProvider from "../providers/CredentialProvider";
import RoutingConstants from "../constants/RoutingConstants";
import LoginReqired from "../components/hoc/LoginReqired";
import AnonymousRequired from "../components/hoc/AnonymousRequired";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../pages/Main"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Logo = lazy(() => import("../components/Logo"));
const Nav = lazy(() => import("../components/Nav"));

const App = () => {
  const location = useLocation();

  const renderRoutes = (): JSX.Element => {
    return (
      <Routes location={location}>
        <Route
          index
          path={RoutingConstants.ROOT}
          element={
            <AnonymousRequired>
              <Suspense fallback={<>...</>}>
                <Nav />
                <Logo />
                <Home />
              </Suspense>
            </AnonymousRequired>
          }
        />
        <Route
          path={RoutingConstants.LISTS}
          element={
            <LoginReqired>
              <Suspense fallback={<>...</>}>
                <Nav />
                <Main />
              </Suspense>
            </LoginReqired>
          }
        />
        <Route
          path={RoutingConstants.LOGIN}
          element={
            <AnonymousRequired>
              <Suspense fallback={<>...</>}>
                <Nav />
                <Login />
              </Suspense>
            </AnonymousRequired>
          }
        />
        <Route
          path={RoutingConstants.ALL}
          element={
            <Suspense fallback={<>...</>}>
              <Nav />
              <Logo />
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    );
  };

  return (
    <ThemeProvider>
      <CredentialProvider>{renderRoutes()}</CredentialProvider>
    </ThemeProvider>
  );
};

export default App;
