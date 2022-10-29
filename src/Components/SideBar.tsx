import { motion } from 'framer-motion'
import React from 'react'
import Button from './Button'

function SideBar() {
    return (
      <motion.div className="w-[20rem] p-2 relative">
        <p className="text-4xl font-bold mb-10 cursor-pointer relative top-[-2rem] left-[1rem]">
          <span className="text-red-400 underline">DDoS</span> <span className="text-orange-400 underline">Detector</span>
        </p>
        <motion.div className="flex flex-col gap-4 relative top-[-1rem]">

          <a href='/'>
            <Button title="Dashboard"/>
          </a>
          <a href='/messages'>
            <Button title="Messages"/>
          </a>
          <a href='/security'>
            <Button title="Security"/>
          </a>
          <a href='/settings'>
            <Button title="Settings"/>
          </a>
          <a href='/hacks'>
            <Button title="Hack History" />
          </a>
  
        </motion.div>
      </motion.div>
    )
}

export default SideBar