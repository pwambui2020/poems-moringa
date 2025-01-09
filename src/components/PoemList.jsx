import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PoemList extends Component {
    render() {
        const { poems, onUpdate } = this.props;

        return (
            <div className="poem-list">
                <h2>Poem Lists</h2>
                <ul>
                {poems.map((poem, index) => (
                    <li key={index} className="poem-card">
                        <h3>{poem.title}</h3>
                        <hr />
                        <p>
                            <strong>Author:</strong> {poem.author}
                        </p>
                        <p>
                            <strong>Genre:</strong> {poem.genre}
                        </p>
                        <p>
                            <strong>Description:</strong> {poem.description}
                        </p>
                        <button onClick={() => onUpdate(index)} className="edit-button">
                            Edit
                        </button>
                     
                    </li>
                ))}
                </ul>
            </div>
        );
    }
}


PoemList.propTypes = {
    poems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            genre: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default PoemList;
