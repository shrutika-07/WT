import React, { useState } from 'react';

function AddBookForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    addBook(title, author, description);
    setTitle('');
    setAuthor('');
    setDescription('');
  };

  return (
    <div className="add-book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
        />
        <textarea 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBookForm;
