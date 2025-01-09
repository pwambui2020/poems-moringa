import React, { useState, useEffect } from 'react';
import './App.css';
import PoemList from './components/PoemList';
import AddPoem from './components/AddPoem';


const App = () => {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    const savedPoems = localStorage.getItem("poems");
    if (savedPoems) {
      setPoems(JSON.parse(savedPoems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("poems",JSON.stringify(poems));
  },[poems]);

  
const addPoem = (poem) => {
  setPoems((prevPoems) => [...prevPoems, poem]);
};


  const updatePoem = (index) => {
    const updatedPoems = [...poems];
    const poemToUpdate = updatedPoems[index];

    const newTitle = prompt('Enter new title:', poemToUpdate.title);
    const newAuthor = prompt('Enter new author:', poemToUpdate.author);
    const newGenre = prompt('Enter new genre:', poemToUpdate.genre);
    const newDescription = prompt('Enter new genre:', poemToUpdate.description);

    if (newTitle && newAuthor && newGenre && newDescription) {
      updatedPoems[index] = { title: newTitle, author: newAuthor, genre: newGenre , description: newDescription};
      setPoems(updatedPoems);
    }
  };

  return (
    <div>
      <h1 className='poems'> Beautiful Poems</h1>
      <AddPoem onAdd={addPoem} />
      <PoemList poems={poems} onUpdate={updatePoem} />
    </div>
  );
};

export default App;
