import { useState, useEffect } from 'react';

export const useChainSelector = () => {
  const [openChainSelector, setOpenChainSelector] = useState(false);
  const [selectedChain, setSelectedChain] = useState(null);

  return {
    openChainSelector,
    setOpenChainSelector,
    selectedChain,
    setSelectedChain,
  };
};
