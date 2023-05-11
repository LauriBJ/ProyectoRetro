import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Tarjeta({ titulo, contenido, likes, onLike }) {
  const [liked, setLiked] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');

  function borrarTarjeta(id) {
    //Borrar tarjeta
  }

  function handleAgregarComentario(event) {
    event.preventDefault();
    if (nuevoComentario.trim() === '') {
      return;
    }
    setComentarios(prevComentarios => [...prevComentarios, nuevoComentario]);
    setNuevoComentario('');
  }
  

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
        <form onSubmit={handleAgregarComentario}>
          <div className="input-group mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Agregar comentario..."
              value={nuevoComentario}
              onChange={e => setNuevoComentario(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Agregar
            </button>
          </div>
        </form>
        {comentarios.map((comentario, index) => (
          <p key={index} className="mt-2">{comentario}</p>
        ))}
      </div>
    </div>
  );
  
};

Tarjeta.propTypes = {
  titulo: PropTypes.string.isRequired,
  contenido: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Tarjeta;  