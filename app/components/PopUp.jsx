import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactPopup = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#022c22]/60 backdrop-blur-md"
          />

          {/* Popup Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/20"
            style={{ fontFamily: 'Geist, "Geist Fallback"' }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-stone-400 hover:text-emerald-900 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col">
              {/* Top Visual Section */}
              <div className="h-32 bg-[#022c22] p-10 flex flex-col justify-end relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                <h3 className="text-white text-2xl font-serif italic relative z-10">
                  Exclusive <span className="text-emerald-400">Preview.</span>
                </h3>
              </div>

              {/* Form Section */}
              <div className="p-10 space-y-8">
                <div className="space-y-2">
                  <p className="text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase">Book a Visit</p>
                  <p className="text-stone-500 font-light text-sm">Leave your contact details for a private site tour and pricing sheet.</p>
                </div>

                <form className="space-y-6">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-stone-50 border border-stone-100 px-6 py-4 rounded-xl text-emerald-950 text-sm focus:outline-none focus:border-emerald-600 transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-stone-50 border border-stone-100 px-6 py-4 rounded-xl text-emerald-950 text-sm focus:outline-none focus:border-emerald-600 transition-all"
                    />
                  </div>

                  {/* Restored Original Gold Button Style */}
                  <div className="pt-2">
                    <button
                      type="button"
                      style={{
                        width: "100%",
                        padding: "16px 0",
                        backgroundColor: "#22C55E",
                        borderRadius: "12px",
                        color: "#fff",
                        fontSize: "0.9rem",
                        fontWeight: "700",
                        cursor: "pointer",
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        position: "relative",
                        overflow: "hidden",
                        zIndex: 1,
                        border: "2px solid #22C55E",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        const fill = e.currentTarget.querySelector(".hover-fill");
                        const text = e.currentTarget.querySelector(".btn-text");
                        if (fill) fill.style.width = "100%";
                        if (text) text.style.color = "#22C55E";
                      }}
                      onMouseLeave={(e) => {
                        const fill = e.currentTarget.querySelector(".hover-fill");
                        const text = e.currentTarget.querySelector(".btn-text");
                        if (fill) fill.style.width = "0%";
                        if (text) text.style.color = "#fff";
                      }}
                    >
                      <div className="hover-fill" style={{ position: "absolute", top: 0, left: 0, width: "0%", height: "100%", background: "#ffffff", transition: "width 0.4s ease", zIndex: -1 }} />
                      <span className="btn-text" style={{ position: "relative", zIndex: 1, color: "#fff", transition: "color 0.3s ease" }}>
                        Confirm Request
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;