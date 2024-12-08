import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddPoem = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, author, genre });
    setTitle('');
    setAuthor('');
    setGenre('');
  };

  return (
    <div className="card" >
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Add Poems </button>
    </form>
    </div>
  );
};

AddPoem.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddPoem;
