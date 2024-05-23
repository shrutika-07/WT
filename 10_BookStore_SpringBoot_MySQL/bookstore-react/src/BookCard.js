// BookCard.js

import React from 'react';

function BookCard({ bookName, price, description, category }) {
  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333',
  };

  const detailStyle = {
    fontSize: '1rem',
    marginBottom: '8px',
    color: '#555',
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{bookName}</h3>
      <p style={detailStyle}>
        <strong>Price:</strong> ${price}
      </p>
      <p style={detailStyle}>
        <strong>Description:</strong> {description}
      </p>
      <p style={detailStyle}>
        <strong>Category:</strong> {category}
      </p>
    </div>
  );
}

export default BookCard;
