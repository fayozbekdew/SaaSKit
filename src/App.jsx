import MainLayout from "./layout/MainLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import OtherPage from "./pages/OtherPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/tasks",
          element: <OtherPage />,
        },
        {
          path: "/email",
          element: <OtherPage />,
        },
        {
          path: "/chat",
          element: <OtherPage />,
        },
        {
          path: "/deals",
          element: <OtherPage />,
        },
        {
          path: "/settings",
          element: <OtherPage />,
        },
        {
          path: "/tasks/active",
          element: <OtherPage />,
        },
        {
          path: "/tasks/completed",
          element: <OtherPage />,
        },
        {
          path: "/tasks/ended",
          element: <OtherPage />,
        },
        {
          path: "/email/draft",
          element: <OtherPage />,
        },
        {
          path: "/email/schedule",
          element: <OtherPage />,
        },
        {
          path: "/email/sent",
          element: <OtherPage />,
        },
        {
          path: "/email/archived",
          element: <OtherPage />,
        },
        {
          path: "/deals/low",
          element: <OtherPage />,
        },
        {
          path: "/deals/high",
          element: <OtherPage />,
        },
        {
          path: "/deals/urgent",
          element: <OtherPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
