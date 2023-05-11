import React, { useState } from 'react';
import Columna from './Components/Columna';
import Tarjeta from './Components/Tarjeta';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [bien, setBien] = useState([]);
  const [mejorar, setMejorar] = useState([]);
  const [kudos, setKudos] = useState([]);

  const [idCounter, setIdCounter] = useState(0);

  const [newTarjetaTitle1, setNewTarjetaTitle1] = useState('');
  const [newTarjetaTitle2, setNewTarjetaTitle2] = useState('');
  const [newTarjetaTitle3, setNewTarjetaTitle3] = useState('');

  const handleLike = (columna, index) => {
    switch (columna) {
      case 'bien':
        setBien(prev => {
          const updated = [...prev];
          updated[index] = {
            ...updated[index],
            likes: updated[index].likes + 1
          };
          return updated;
        });
        break;
      case 'mejorar':
        setMejorar(prev => {
          const updated = [...prev];
          updated[index] = {
            ...updated[index],
            likes: updated[index].likes + 1
          };
          return updated;
        });
        break;
      case 'kudos':
        setKudos(prev => {
          const updated = [...prev];
          updated[index] = {
            ...updated[index],
            likes: updated[index].likes + 1
          };
          return updated;
        });
        break;
      default:
        break;
    }
  };
  
  const handleAddTarjeta = (columna, titulo, contenido) => {
    if (titulo.trim() === '') {
      alert('El título de la tarjeta es obligatorio');
      return;
    }
    
     const nuevaTarjeta = {
      id: idCounter,
      titulo,
      contenido,
      likes: 0
    };
    

    
    switch (columna) {
      case 'bien':
        setBien(prev => [...prev, nuevaTarjeta]);
        break;
      case 'mejorar':
        setMejorar(prev => [...prev, nuevaTarjeta]);
        break;
      case 'kudos':
        setKudos(prev => [...prev, nuevaTarjeta]);
        break;
      default:
        break;
    }

    setIdCounter(prevCounter => prevCounter+1);
  };

  const handleBorrarTarjeta = (columna, id) => {
    switch (columna) {
      case 'bien':
        setBien(prev => prev.filter(tarjeta => tarjeta.id !== id));
        break;
      case 'mejorar':
        setMejorar(prev => prev.filter(tarjeta => tarjeta.id !== id));
        break;
      case 'kudos':
        setKudos(prev => prev.filter(tarjeta => tarjeta.id !== id));
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
              onBorrar={(id) => handleBorrarTarjeta('bien', id)}
              id = {tarjeta.id}
            />
          ))}
          <input type="text" placeholder='Titulo de la tarjeta' value={newTarjetaTitle1}  onChange={(e) => 
            setNewTarjetaTitle1(e.target.value)}/>
          <button
            className="btn btn-success shadow"
            onClick={() => {  handleAddTarjeta('bien', newTarjetaTitle1, '');  setNewTarjetaTitle1(''); }}
            >  Agregar
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
              onBorrar={(id) => handleBorrarTarjeta('mejorar', id)}
              id = {tarjeta.id}
            />
          ))}
          <input type="text" placeholder='Titulo de la tarjeta' value={newTarjetaTitle2}  onChange={(e) => 
            setNewTarjetaTitle2(e.target.value)}/>
          <button
            className="btn btn-danger shadow" 
            onClick={() => {  handleAddTarjeta('mejorar', newTarjetaTitle2, '');  setNewTarjetaTitle2(''); }}
            >  Agregar
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
              onBorrar={(id) => handleBorrarTarjeta('kudos', id)}
              id = {tarjeta.id}
            />
          ))}
          <input type="text" placeholder='Titulo de la tarjeta' value={newTarjetaTitle3}  onChange={(e) => 
            setNewTarjetaTitle3(e.target.value)}/>
          <button
            className="btn btn-primary"
            onClick={() => {  handleAddTarjeta('kudos', newTarjetaTitle3, '');  setNewTarjetaTitle3(''); }}
            >  Agregar
          </button>

        </Columna>
      </div>
    </div>
  );
}

export default App;