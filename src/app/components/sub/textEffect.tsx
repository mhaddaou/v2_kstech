'use client'
import { motion } from 'framer-motion'


export default function OutlineTextWithQuote() {
  

  return (
    <motion.div 
    initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 0.3 }}
    className=" w-screen overflow-hidden flex flex-col items-center justify-center  ">
      <div className="text-[15rem] leading-[10.5rem] font-poppins text-3xl uppercase whitespace-nowrap textStroke animate-fademoveLeftToRight text-ellipsis font-semibold">
      
        <p 
          
         
        >
          &quot; La raison d&apos;être d&apos;une entreprise est de créer et de garder ces clients &quot;
        </p>
        <p 
          className={`text-xl md:text-4xl flex justify-end  tracking-wide transition-colors duration-300 pt-2   ease-in-out text-white`}
          style={{
            WebkitTextStroke: '1px white',
          }}
        >
          Théodore Levitt
        </p>
      </div>
    </motion.div>
  )
}

