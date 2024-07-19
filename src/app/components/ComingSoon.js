// components/ComingSoonPopup.js
import { useState, useEffect } from 'react';

const ComingSoonPopup = ({ show, onClose }) => {
  const [showPopup, setShowPopup] = useState(show);

  useEffect(() => {
    if (show) {
      setShowPopup(true);
    } else {
      const timer = setTimeout(() => setShowPopup(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!showPopup) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${show ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className={`relative bg-white p-6 rounded-xl shadow-lg z-10 transform ${show ? 'animate-bounce-in' : ''}`}>
        <h2 className="text-4xl fnt-solid font-semibold mb-4">Coming Soon</h2>
        <p className="fnt-sec text-lg">Our new feature is on its way! Stay tuned.</p>
        <button className="mt-4 px-4 py-2 bg-ber-blue fnt-solid border-2 border-black  text-white rounded-xl" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ComingSoonPopup;
