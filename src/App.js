import React, { useState } from 'react';
import Columna from './Components/Columna';
import Tarjeta from './Components/Tarjeta';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [bien, setBien] = useState([]);
  const [mejorar, setMejorar] = useState([]);
  const [kudos, setKudos] = useState([]);

  const handleLike = (columna, index) => {
    switch (columna) {
      case 'bien':
        setBien((prev) => {
          const copy = [...prev];
          copy[index].likes += 1;
          return copy;
        });
        break;
      case 'mejorar':
        setMejorar((prev) => {
          const copy = [...prev];
          copy[index].likes += 1;
          return copy;
        });
        break;
      case 'kudos':
        setKudos((prev) => {
          const copy = [...prev];
          copy[index].likes += 1;
          return copy;
        });
        break;
      default:
        break;
    }
  };

  const handleAddTarjeta = (columna, titulo, contenido) => {
    const nuevaTarjeta = {
      titulo,
      contenido,
      likes: 0,
    };

    switch (columna) {
      case 'bien':
        setBien((prev) => [...prev, nuevaTarjeta]);
        break;
      case 'mejorar':
        setMejorar((prev) => [...prev, nuevaTarjeta]);
        break;
      case 'kudos':
        setKudos((prev) => [...prev, nuevaTarjeta]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <Columna titulo="Qué se hizo bien" color="#28a745">
          {bien.map((tarjeta, index) => (
            <Tarjeta
              key={`bien-${index}`}
              titulo={tarjeta.titulo}
              contenido={tarjeta.contenido}
              likes={tarjeta.likes}
              onLike={() => handleLike('bien', index)}
            />
          ))}
          <button
            className="btn btn-success"
            onClick={() => handleAddTarjeta('bien', 'Nueva idea', '')}
          >
            Agregar tarjeta
          </button>
        </Columna>
        <Columna titulo="Para mejorar" color="#dc3545">
          {mejorar.map((tarjeta, index) => (
            <Tarjeta
              key={`mejorar-${index}`}
              titulo={tarjeta.titulo}
              contenido={tarjeta.contenido}
              likes={tarjeta.likes}
              onLike={() => handleLike('mejorar', index)}
            />
          ))}
          <button
            className="btn btn-danger"
            onClick={() => handleAddTarjeta('mejorar', 'Nueva idea', '')}
          >
            Agregar tarjeta
          </button>
        </Columna>
        <Columna titulo="Kudos" color="#007bff">
          {kudos.map((tarjeta, index) => (
            <Tarjeta
              key={`kudos-${index}`}
              titulo={tarjeta.titulo}
              contenido={tarjeta.contenido}
              likes={tarjeta.likes}
              onLike={() => handleLike('kudos', index)}
            />
          ))}
          <button
            className =             "btn btn-primary"
            onClick={() => handleAddTarjeta('kudos', 'Nueva idea', '')}
          >
            Agregar tarjeta
          </button>
        </Columna>
      </div>
    </div>
  );
}

export default App;
