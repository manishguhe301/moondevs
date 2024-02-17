import { useState, useEffect } from 'react';

export const useWallet = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);
  const [isBalanceError, setIsBalanceError] = useState(false);
  const [openChainModal, setOpenChainModal] = useState(false);
  const [walletChain, setWalletChain] = useState(null);
  const [chains, setChains] = useState([]);
  const [openConnectModal, setOpenConnectModal] = useState(false);

  return {
    walletAddress,
    isWalletConnected,
    walletBalance,
    isBalanceError,
    openChainModal,
    walletChain,
    chains,
    openConnectModal,
  };
};
