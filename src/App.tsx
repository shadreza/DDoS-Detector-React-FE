import React from 'react';
import { motion } from "framer-motion"
import Button from './Components/Button';
import Header from './Components/Header';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <motion.div className="h-screen w-full flex flex-col bg-black">

      <motion.div className="sticky top-0 w-full h-12 z-1">
        <Header />
      </motion.div>
      
      <motion.div className="h-screen top-12 w-full flex flex-row">
        <motion.div className="w-[20rem] p-2 relative">
          <p className="text-4xl font-bold  animate-pulse mb-10 cursor-pointer relative top-[-2rem] left-[1rem]">
            <span className="text-red-400 underline">DDoS</span> <span className="text-orange-400 underline">Detector</span>
          </p>
          <motion.div className="flex flex-col gap-4 relative top-[-1rem]">
            <Button title="Dashboard"/>
            <Button title="Messages" />
            <Button title="Security" />
            <Button title="Settings" />
            <Button title="Hack" />
          </motion.div>
        </motion.div>
        <motion.div className="w-full bg-[#1A1A40] rounded-tl-2xl p-2">
          <RouterProvider router={router} />
        </motion.div>
      </motion.div>

    </motion.div>
  );
}

export default App;
