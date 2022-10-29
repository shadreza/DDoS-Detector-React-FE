import { motion } from 'framer-motion'
import React from 'react'
import { Title } from '../Interfaces/Button_Title.interface'
import { TbHome, TbMessageDots, TbSettings } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import { SiHackaday } from 'react-icons/si'

function Button(props: Title) {
    return (
        <motion.div className="flex justify-start space-x-5 ml-[2rem] text-white hover:text-violet-400">
            {
                props.title === "Dashboard" ? 
                    <TbHome className="text-xl self-center" />
                    :
                    props.title === "Messages" ? 
                        <TbMessageDots className="text-xl self-center" />
                        :
                        props.title === "Security" ?        
                            <MdSecurity className="text-xl self-center" />
                            :
                            props.title === "Settings" ?        
                                <TbSettings className="text-xl self-center" />
                                :
                                <SiHackaday className="text-xl self-center"/>
            }
            
            <span className="text-base focus:text-lg font-semibold hover:cursor-pointer self-center">
                {props.title}
            </span>
        </motion.div>
    )
}

export default Button