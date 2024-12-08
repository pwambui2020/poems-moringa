import React, { useState } from 'react';
import './App.css';
import PoemList from './components/PoemList';
import AddPoem from './components/AddPoem';


const App = () => {
  const [poems, setPoems] = useState([]);

  const addPoem = (poem) => {
    setPoems([...poems, poem]);
  };

  const updatePoem = (index) => {
    const updatedPoems = [...poems];
    const newTitle = prompt('Enter new title:', updatedPoems[index].title);
    const newAuthor = prompt('Enter new author:', updatedPoems[index].author);
    const newGenre = prompt('Enter new genre:', updatedPoems[index].genre);

    if (newTitle && newAuthor && newGenre) {
      updatedPoems[index] = { title: newTitle, author: newAuthor, genre: newGenre };
      setPoems(updatedPoems);
    }
  };

  return (
    <div>
      <h1>Poems</h1>
      <AddPoem onAdd={addPoem} />
      <PoemList poems={poems} onUpdate={updatePoem} />
    </div>
  );
};

export default App;
