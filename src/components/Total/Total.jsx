import React from 'react';

export default function Chart({ total }) {
  return (
    <>
      <h2>Total this month</h2>
      <p>${total}</p>
      <p>+2.4%</p>
      <p>from last month</p>
    </>
  );
}
