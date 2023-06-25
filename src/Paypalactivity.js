import React from 'react';

const transactions = [
  { id: 1, amount: 100, currency: 'USD', status: 'completed' },
  { id: 2, amount: 50, currency: 'EUR', status: 'completed' },
  { id: 3, amount: 200, currency: 'USD', status: 'pending' },
  { id: 4, amount: 75, currency: 'USD', status: 'completed' },
];

const PayPalActivity = () => {
  return (
    <div>
      <h1>PayPal Transactions Activity</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayPalActivity;
