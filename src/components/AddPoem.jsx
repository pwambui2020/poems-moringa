import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddPoem = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !genre || !description) {
      setError('All fields are required!');
      return;
    }
    setError('');

    onAdd({ title, author, genre, description });

    setTitle('');
    setAuthor('');
    setGenre('');
    setDescription('');
  };

  return (
    <div className="card" >
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>} 

      
        <input
          type="text"
          placeholder="Poem Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn-add"> Add Poems </button>
      </form>
    </div>
  );
};

AddPoem.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddPoem;
