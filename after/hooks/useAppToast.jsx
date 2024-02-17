import { useState, useEffect } from 'react';

export const useAppToast = () => {
  const [toastMsg, setToastMsg] = useState('');
  const [toastSev, setToastSev] = useState('info');

  const showToast = (msg, sev) => {
    setToastMsg(msg);
    setToastSev(sev);
  };

  return {
    toastMsg,
    toastSev,
    showToast,
  };
};
