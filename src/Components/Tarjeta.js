import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Tarjeta({ titulo, contenido, likes, onLike, onBorrar, id }) {
  const [liked, setLiked] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');

  const borrarTarjeta = () => { onBorrar(id);
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
        <form onSubmit={handleAgregarComentario}>
          <div className="input-group mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Agregar comentario..."
              value={nuevoComentario}
              onChange={e => setNuevoComentario(e.target.value)}
            />
            <button className="btn btn-primary" type="submit"> Agregar </button>
          </div>
        </form>
        {comentarios.map((comentario, index) => (
          <p key={index} className="mt-2">{comentario}</p>
        ))}
        
        <button className=" btn btn-outline-secondary" onClick={handleLike}>
               {`${likes} ${likes === 1 ? 'like' : 'likes'}`}
        </button>
        <button className="btn btn-sm btn-outline-danger ml-autor" onClick=
            {borrarTarjeta}><FontAwesomeIcon icon={faTrash} />
          </button>
      </div>
          <span className="ml-2 shadow">
            {`${comentarios.length} ${comentarios.length === 1 ? 'comentario' : 'comentarios'}`}
          </span>
   </div>
  );
  
};

Tarjeta.propTypes = {
  titulo: PropTypes.string.isRequired,
  contenido: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
  onBorrar: PropTypes.func.isRequired,
};

export default Tarjeta;  