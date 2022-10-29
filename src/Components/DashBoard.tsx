import { motion } from 'framer-motion'
import React from 'react'

function DashBoard() {
  return (
    <motion.div className="text-white max-h-screen">
      <h1 className="text-2xl mb-10">Dashboard</h1>
      <motion.div className="grid gap-4 grid-cols-2 grid-rows-1">
        <img className="rounded-lg self-center" src="https://i.ibb.co/mD3nS1w/attack-prediction.png" alt="ddos-predictions" />
        <div className="flex flex-col gap-3">
          <img className="rounded-lg self-center" src="https://i.ibb.co/6tgbL0Q/Screenshot-2022-10-30-at-4-47-14-AM.png" alt="ddos-predictions" />
          <img className="rounded-lg self-center" src="https://i.ibb.co/FWxtSdr/Screenshot-2022-10-30-at-4-59-33-AM.png" alt="ddos-predictions" />
        </div>
        
      </motion.div>
    </motion.div>
  )
}

export default DashBoard