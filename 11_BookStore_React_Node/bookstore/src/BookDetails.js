import React from 'react';

function BookDetails({ book, closeBookDetails }) {
  return (
    <div className="book-details">
      <button onClick={closeBookDetails} className="close-btn">&times;</button>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetails;
