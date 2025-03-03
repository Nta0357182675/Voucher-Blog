// src/components/Voucher.jsx
import React from 'react';
import { Link } from 'react-router';

const Voucher = () => {
  // Giả sử bạn có một danh sách các voucher
  const vouchers = [
    { id: 1, name: 'Voucher 1', description: 'Giảm giá 10%' },
    { id: 2, name: 'Voucher 2', description: 'Giảm giá 20%' },
    { id: 3, name: 'Voucher 3', description: 'Giảm giá 30%' },
  ];

  return (
    <div>
      <h2>Danh sách Voucher</h2>
      <ul>
        {vouchers.map((voucher) => (
          <li key={voucher.id}>
            <Link to={`/app/vouchers/${voucher.id}`}>
              {voucher.name} - {voucher.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Voucher;
