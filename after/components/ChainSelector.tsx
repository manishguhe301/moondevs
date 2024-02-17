import React from 'react';
import { ChainSelector as ChainSelectorComponent } from './ChainSelectorComponent';  //Assuming we have a component named ChainSelectorComponent

type ChainSelectorProps = {
  openChainSelector: boolean;
  setOpenChainSelector: (open: boolean) => void;
  chains: any[];
  selectedChain: any;
  setSelectedChain: (chain: any) => void;
};

const ChainSelector: React.FC<ChainSelectorProps> = ({
  openChainSelector,
  setOpenChainSelector,
  chains,
  selectedChain,
  setSelectedChain,
}) => {
  return (
    <ChainSelectorComponent
      title={'Switch Token Chain'}
      openChainSelector={openChainSelector}
      setOpenChainSelector={setOpenChainSelector}
      chains={chains}
      selectedChain={selectedChain}
      setSelectedChain={setSelectedChain}
    />
  );
};

export default ChainSelector;
