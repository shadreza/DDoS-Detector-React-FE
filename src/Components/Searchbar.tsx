import { motion } from 'framer-motion'
import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

function Searchbar() {
  return (
    <motion.div className="w-[20rem] p-1 bg-[#242424] rounded-full text-gray-400 flex  justify-between text-lg self-center align-middle">
      <input placeholder="Search" type="text" className="bg-[#242424] outline-none ml-4" />
      <BiSearchAlt className="self-center cursor-pointer mr-2" />
    </motion.div>
  )
}

export default Searchbar