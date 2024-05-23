import React, { useState } from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import BookDetails from './BookDetails';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1', description: 'Description 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', description: 'Description 2' },
    { id: 3, title: 'Book 3', author: 'Author 3', description: 'Description 3' },
  ]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addBook = (title, author, description) => {
    const newBook = {
      id: books.length + 1,
      title,
      author,
      description,
    };
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
    setSelectedBook(null); // Deselect the book if it's deleted
  };

  const viewBook = (id) => {
    const book = books.find(book => book.id === id);
    setSelectedBook(book);
  };

  const closeBookDetails = () => {
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <h1 className="header">Bookstore</h1>
      <Tabs>
        <TabList>
          <Tab>Book List</Tab>
          <Tab>Add Book</Tab>
        </TabList>

        <TabPanel>
          <BookList books={books} deleteBook={deleteBook} viewBook={viewBook} />
        </TabPanel>
        <TabPanel>
          <AddBookForm addBook={addBook} />
        </TabPanel>
      </Tabs>
      {selectedBook && <BookDetails book={selectedBook} closeBookDetails={closeBookDetails} />}
    </div>
  );
}

export default App;
