import CloudMap from '@/components/chuworld/CloudMap';
import { useState, useEffect } from 'react';
import ChuWorldItem from '@/components/chuworld/ChuWorldItem';
import { motion, AnimatePresence } from 'framer-motion';
import ChuWorldList from '@/components/chuworld/ChuWorldList';

export default function Chuworld() {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 5000);
  }, []);

  return (
    <div className="root">
      {/* <CloudMap /> */}
      <ChuWorldItem />
      {/* <ChuWorldList /> */}
      <style jsx>
        {`
          .root {
            weight: 100vw;
            height: 100vh;
          }
        `}
      </style>
    </div>

    // <AnimatePresence mode="wait">
    //   {/* {isShow && ( */}
    //   <motion.div>
    //
    //   </motion.div>
    //   {/* )} */}
    //   {/* {!isShow && <ChuWorldItem />} */}
    // </AnimatePresence>
  );
}