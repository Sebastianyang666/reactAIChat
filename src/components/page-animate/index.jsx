/*
 * @Descripttion: 
 * @version: 
 * @Author: yangshengpeng
 * @Date: 2025-09-03 15:59:02
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-09-03 15:59:07
 */
// src/components/page-animate/index.tsx
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from 'prop-types';

export function PageAnimate({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.4 }}
        className="h-full flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

PageAnimate.propTypes = {
  children: PropTypes.node.isRequired,
};
