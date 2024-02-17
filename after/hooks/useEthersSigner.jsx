import { useState, useEffect } from 'react';

export const useEthersSigner = ({ chainId }) => {
  const [ethersSigner, setEthersSigner] = useState(null);

  return ethersSigner;
};
