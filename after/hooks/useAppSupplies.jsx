import { useState, useEffect } from 'react';

export const useAppSupplies = (initialFetch = false) => {
  const [supplies, setSupplies] = useState([]);
  const [allSupplies, setAllSupplies] = useState([]);
  const [suppliesChain, setSuppliesChain] = useState(null);

  return {
    supplies,
    allSupplies,
    suppliesChain,
    setSuppliesChain,
  };
};
