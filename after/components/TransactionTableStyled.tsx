import React from 'react';
import { BurnTxTable } from './BurnTxTable'; //Assuming we have a component named BurnTxTable

type TransactionTableStyledProps = {
  burnTransactions: any;
  coinData: any;
};

const TransactionTableStyled: React.FC<TransactionTableStyledProps> = ({
  burnTransactions,
  coinData,
}) => {
  return (
    <div>
      <div className='header'>
        <p className='header_label'>Burn Transactions</p>
      </div>
      <BurnTxTable
        data={burnTransactions}
        priceUSD={coinData?.current_price?.usd}
      />
    </div>
  );
};

export default TransactionTableStyled;
