import { motion } from 'framer-motion'
import React from 'react'
import Searchbar from './Searchbar'
import { AiFillAlert } from 'react-icons/ai'
import { TbHeartbeat } from 'react-icons/tb'
import { FaUserSecret } from 'react-icons/fa'

function Header() {
  return (
    <motion.div className="w-full h-12 flex flex-row">

      <motion.div className="flex basis-1/2 justify-end">
        <Searchbar/>
      </motion.div>
      
      <motion.div className="flex basis-1/2 justify-end pr-4 gap-4">
        <motion.div className="flex basis-1/2 justify-end pr-4 gap-4">
          <AiFillAlert className="text-red-400 text-xl self-center animate-pulse cursor-pointer" />
          <TbHeartbeat className="text-white text-xl self-center cursor-pointer" />
          <FaUserSecret className="text-purple-600 text-xl self-center cursor-pointer" />
        </motion.div>
        <motion.div className="flex basis-1/2 justify-center pl-20 gap-2">
          <motion.img
            className="cursor-pointer"
            src="https://wallpaperaccess.com/full/2055905.jpg" />
          <p className="text-red-300 self-center cursor-pointer text-sm">Shad Reza</p>
        </motion.div>
      </motion.div>

    </motion.div>
  )
}

export default Header