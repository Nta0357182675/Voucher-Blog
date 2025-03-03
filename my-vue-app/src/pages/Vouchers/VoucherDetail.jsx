// src/components/VoucherDetail.jsx
import React from 'react';
import { useParams } from 'react-router';

const VoucherDetail = () => {
  const { id } = useParams(); // Lấy ID của voucher từ URL

  // Giả sử bạn có thông tin chi tiết của các voucher
  const voucherDetails = {
    1: { name: 'Voucher 1', description: 'Giảm giá 10%', terms: 'Áp dụng cho mọi đơn hàng' },
    2: { name: 'Voucher 2', description: 'Giảm giá 20%', terms: 'Áp dụng cho đơn hàng từ 200k' },
    3: { name: 'Voucher 3', description: 'Giảm giá 30%', terms: 'Áp dụng cho đơn hàng từ 500k' },
  };

  const voucher = voucherDetails[id];

  if (!voucher) {
    return <p>Voucher không tồn tại</p>;
  }

  return (
    <div>
      <h2>Chi tiết Voucher</h2>
      <h3>{voucher.name}</h3>
      <p>{voucher.description}</p>
      <p><strong>Điều kiện:</strong> {voucher.terms}</p>
    </div>
  );
};

export default VoucherDetail;
