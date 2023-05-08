import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Tarjeta({ titulo, contenido, likes, onLike }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      onLike();
      setLiked(true);
    }
  };

  return (
    <div className="card my-2">
      <div className="card-body">
        <h6 className="card-title">{titulo}</h6>
        <p className="card-text">{contenido}</p>
        <button className="btn btn-outline-secondary" onClick={handleLike}>
          {`${likes} ${likes === 1 ? 'like' : 'likes'}`}
        </button>
      </div>
    </div>
  );
}

Tarjeta.propTypes = {
  titulo: PropTypes.string.isRequired,
  contenido: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Tarjeta;