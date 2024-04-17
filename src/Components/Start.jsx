
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom'; // Importing Link component from React Router

const Start = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto relative z-10 max-sm:mt-[250px] w-full pt-20 md:pt-0">
   
      <motion.h1
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 6, delay: 3}}
        className="max-sm:mt-[-150px] lg:text-9xl lg:pl-[60px] lg:mt-[200px] outfit tracking-widest max-sm:text-[37px] max-sm:tracking-widest font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300  to-neutral-950  max-sm:ml-[35px]"
      >
        WELCOME TO AI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 6, delay: 3}}
        className="text-4xl ml-[330px] mt-9 lg:pl-[170px] max-sm:text-sm max-sm:ml-[140px] max-sm:mt-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-600  to-neutral-950"
      >
        AI CHAT BOAT
      </motion.p>
      <Link to="/main" className="flex ml-[550px] max-sm:ml-[130px] max-sm:mt-3 mt-10">
        <button className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-950 min-h-[46px] px-4 py-3 max-sm:mt-11 max-sm:ml-1 max-sm:tracking-widest">
          EXPLORE
        </button>
      </Link>
    </div>
  );
}

export default Start;
