import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import { HomeLayout,
   AddJob,
   Admin,
   AllJobs,
   DashboardLayout,
   EditJob,
   Error,
   Landing,
   Profile,
   Register,
   Stats,
   Login
} from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement:<Error/>,
    children: [
      {
        index:true,
        element:<Landing/>
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App







