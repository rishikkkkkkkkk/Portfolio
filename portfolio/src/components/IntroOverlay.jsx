import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroOverlay({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleDismiss();
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fm-intro"
        >
          <div className="fm-zoom">
            <div className="fm-scene fm-scene--base hidden sm:flex">
              <div className="fm-col">
                <div className="fm-col-h">The Morning Brief</div>
                <div className="fm-col-l x"></div>
                <div className="fm-col-l"></div>
                <div className="fm-col-l s"></div>
                <div className="fm-col-l"></div>
              </div>
              <div className="fm-col">
                <div className="fm-col-h">DevOps Desk</div>
                <div className="fm-col-l"></div>
                <div className="fm-col-l s"></div>
                <div className="fm-col-l x"></div>
              </div>
              <div className="fm-col">
                <div className="fm-col-h">EKS Inspection</div>
                <div className="fm-col-l s"></div>
                <div className="fm-col-l"></div>
                <div className="fm-col-l x"></div>
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="fm-masthead"
            >
              <div className="fm-masthead-k">DevOps Case Record · Special Issue</div>
              <div className="fm-masthead-t">Rishit Kumar</div>
              <p className="mt-3 font-gothic text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
                AWS Production EKS · Terraform IaC · Self-Healing CI/CD
              </p>
            </motion.div>
          </div>

          <div className="fm-hint">Inspecting Evidence Files — Jaipur Record</div>

          <button className="fm-skip" type="button" onClick={handleDismiss}>
            Skip intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
