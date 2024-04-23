import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ThemeProvider from "../providers/ThemeProvider";
import RoutingConstants from "../constants/RoutingConstants";
import CredentialProvider from "../providers/CredentialProvider";
import ProfileProvider from "../providers/ProfileProvider";

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
            <Suspense fallback={<>...</>}>
              <Nav />
              <Logo />
              <Home />
            </Suspense>
          }
        />
        <Route
          path={RoutingConstants.LOGIN}
          element={
            <Suspense fallback={<>...</>}>
              <Nav />
              <Login />
            </Suspense>
          }
        />
        <Route
          path={RoutingConstants.LISTS}
          element={
            <Suspense fallback={<>...</>}>
              <Nav />
              <Main />
            </Suspense>
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
      <CredentialProvider>
        <ProfileProvider>{renderRoutes()}</ProfileProvider>
      </CredentialProvider>
    </ThemeProvider>
  );
};

export default App;
