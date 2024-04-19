import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const Nav = lazy(() => import("../components/Nav"));
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../pages/Main"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Logo = lazy(() => import("../components/Logo"));
const ThemeProvider = lazy(() => import("../providers/ThemeProvider"));

const App = () => {
  const location = useLocation();

  const renderRoutes = (): JSX.Element => {
    return (
      <Routes location={location}>
        <Route
          index
          path="/"
          element={
            <Suspense fallback={<>...</>}>
              <Nav />
              <Logo />
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/login/"
          element={
            <Suspense fallback={<>...</>}>
              <Nav />
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/lists/"
          element={
            <Suspense fallback={<>...</>}>
              <Nav />
              <Main />
            </Suspense>
          }
        >
          <Route
            path=":listId"
            element={
              <Suspense fallback={<>...</>}>
                <Nav />
                <Main />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
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

  return <ThemeProvider>{renderRoutes()}</ThemeProvider>;
};

export default App;
