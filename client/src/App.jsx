import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard, HomeLayout, Landing, Login, Logout, Register } from "./pages";
import BasicInformation from './pages/BasicInformation';
import ResidentList from './pages/ResidentList';
import MealManagement from './pages/MealManagement';
import HealthManagement from './pages/HealthManagement';
import Messages from './pages/Messages';
import Activities from "./pages/Activities";
import AddNurse from './pages/AddUser'; // Import AddNurse component

import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "basicInformation",
        element: <BasicInformation />,
      },
      {
        path: "activities",
        element: <Activities />,
      },
      {
        path: 'healthManagement',
        element: <HealthManagement />,
      },
      {
        path: "residentList",
        element: <ResidentList />,
      },
      {
        path: 'mealManagement',
        element: <MealManagement />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "addUser", // Add the path for Add Nurse
        element: <AddNurse />,
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position='top-center' />
    </>
  );
}

export default App;
