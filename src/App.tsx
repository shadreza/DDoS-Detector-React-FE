import React from 'react';
import { motion } from "framer-motion"
import Header from './Components/Header';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ErrorPage from './ErrorPage';
import SideBar from './Components/SideBar';
import DashBoard from './Components/DashBoard';
import Messages from './Components/Messages';
import Security from './Components/Security';
import Settings from './Components/Settings';
import Hack from './Components/Hack';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard/>,
    errorElement: <ErrorPage />,
  },{
    path: "messages",
    element: <Messages/>,
  },{
    path: "security",
    element: <Security/>,
  },{
    path: "settings",
    element: <Settings/>,
  },{
    path: "hack",
    element: <Hack/>,
  },
]);

function App() {
  return (
    <motion.div className="h-screen w-full flex flex-col bg-black">

      <motion.div className="sticky top-0 w-full h-12 z-1">
        <Header />
      </motion.div>
      
      <motion.div className="h-screen top-12 w-full flex flex-row">
        <SideBar />
        
        <motion.div className="w-full bg-[#1A1A40] rounded-tl-2xl p-2">
          <RouterProvider router={router} />
        </motion.div>

      </motion.div>

    </motion.div>
  );
}

export default App;
