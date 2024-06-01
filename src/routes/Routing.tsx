import { lazy, Suspense, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Loader from "../components/Loader";

import RoutingConstants from "../constants/RoutingConstants";
import LoginReqired from "../components/hoc/LoginReqired";
import AnonymousRequired from "../components/hoc/AnonymousRequired";
import DataContext from "../contexts/DataContext";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../pages/Main"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Logo = lazy(() => import("../components/Logo"));
const Nav = lazy(() => import("../components/Nav"));
const TodoList = lazy(() => import("../components/TodoList"));
const TodoListPanel = lazy(() => import("../components/TodoListPanel"));
const TodoPanel = lazy(() => import("../components/TodoPanel"));
const ServerError = lazy(() => import("../pages/ServerError"));

const Routing = (): JSX.Element => {
  const { data } = useContext(DataContext);
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route
        index
        path={RoutingConstants.ROOT}
        element={
          <AnonymousRequired>
            <Suspense fallback={<Loader />}>
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
            <Suspense fallback={<Loader />}>
              <Nav />
              <Suspense fallback={<Loader />}>
                <Main />
              </Suspense>
            </Suspense>
          </LoginReqired>
        }
      >
        {data
          ? data._embedded
            ? data._embedded.todoListList.map((list) => {
                return (
                  <Route
                    key={list.todoListId}
                    path={String(list.todoListId)}
                    element={
                      <Suspense fallback={<Loader />}>
                        <TodoList
                          todoListId={list.todoListId}
                          userId={list.userId}
                          title={list.title}
                          created={list.created}
                          lastModified={list.lastModified}
                          todos={list.todos}
                          _links={{
                            self: list._links.self,
                            todoLists: list._links.todoLists,
                          }}
                        />
                      </Suspense>
                    }
                  >
                    <Route
                      path="edit"
                      element={<TodoListPanel todoList={list} />}
                    />
                    <Route
                      path="new-todo"
                      element={<TodoPanel todoList={list} todo={null} />}
                    />
                    {list.todos.map((todo) => {
                      return (
                        <Route
                          key={todo.todoId}
                          path={String(todo.todoId)}
                          element={<TodoPanel todoList={list} todo={todo} />}
                        />
                      );
                    })}
                  </Route>
                );
              })
            : null
          : null}
        <Route path="new" element={<TodoListPanel todoList={null} />} />
      </Route>

      <Route
        path={RoutingConstants.LOGIN}
        element={
          <AnonymousRequired>
            <Suspense fallback={<Loader />}>
              <Nav />
              <Login />
            </Suspense>
          </AnonymousRequired>
        }
      />
      <Route
        path={RoutingConstants.ERROR}
        element={
          <Suspense fallback={<Loader />}>
            <Nav />
            <Logo />
            <ServerError />
          </Suspense>
        }
      />
      <Route
        path={RoutingConstants.ALL}
        element={
          <Suspense fallback={<Loader />}>
            <Nav />
            <Logo />
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Routing;
