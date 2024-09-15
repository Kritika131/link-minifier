import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import AppLayout from "./layouts/app_layout"
import Landing from "./pages/landing"
import Dashboard from "./pages/dashboard"
import Link from "./pages/link"
import Authentication from "./pages/auth"
import RedirectLink from "./pages/redirect_link"
import UrlProvider from "./context"
import RequireAuth from "./components/require-auth"
import LinkPage from "./pages/link"

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/dashboard",
          element: (
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          ),
        },
        {
          path: "/auth",
          element: <Authentication />,
        },
        {
          path: "/link/:id",
          element: <RequireAuth>
            <LinkPage />,

          </RequireAuth>
        },
        {
          path: "/:id",
          element: <RedirectLink />,
        },
      ],
    },
  ]);



  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  ); 
}

export default App
