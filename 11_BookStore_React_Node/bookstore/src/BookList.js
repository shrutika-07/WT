import React from 'react';

function BookList({ books, deleteBook, viewBook }) {
  return (
    <div className="book-list-container">
      <ul className="book-list">
        {books.map(book => (
          <li key={book.id} className="book-item">
            <div>
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
            </div>
            <div className="book-item-buttons">
              <button onClick={() => viewBook(book.id)}>View</button>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
