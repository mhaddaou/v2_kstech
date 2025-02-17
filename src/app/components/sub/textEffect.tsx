'use client'
import { motion } from 'framer-motion'


export default function OutlineTextWithQuote() {
  

  return (
    <motion.div 
    initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 0.3 }}
    className="  flex flex-col items-center justify-center  ">
      <div className=" bg-red-600 font-poppins text-5xl  uppercase  textStroke  text-ellipsis font-semibold">
      
        <p 
          
         
        >
          &quot; La raison d&apos;être d&apos;une entreprise est de créer et de garder ces clients &quot;
        </p>
        <p 
          className={`text-xl flex justify-end  tracking-wide transition-colors duration-300 pt-2   ease-in-out text-white`}
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

