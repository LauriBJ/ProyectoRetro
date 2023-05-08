import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { SketchPicker } from 'react-color';
import classnames from 'classnames';

const COLOR_OPTIONS = ['#f2f2f2', '#e6e6e6', '#d9d9d9', '#cccccc', '#b3b3b3', '#999999', '#7f7f7f', '#666666', '#4c4c4c', '#333333'];

function Columna({ titulo, color, children }) {
  const [selectedColor, setSelectedColor] = useState(color);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor.hex);
    setShowColorPicker(false);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  useEffect(() => {
    const card = document.getElementById(`card-${titulo}`);
    if (card) {
      card.style.backgroundColor = selectedColor;
    }
  }, [selectedColor, titulo]);

  return (
    <div className="col-md-4">
      <div className="card" id={`card-${titulo}`}>
        <div className="card-header" style={{ backgroundColor: color }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h5 className="text-white" style={{ margin: '0' }}>{titulo}</h5>
            <div className="color-picker" style={{ position: 'relative' }}>
              <FontAwesomeIcon icon={faSquare} className="color-picker-icon" style={{ color: selectedColor, border: '1px solid black', cursor: 'pointer' }} onClick={toggleColorPicker} />
              {showColorPicker && (
                <div className="popover" style={{ position: 'absolute', zIndex: '2', top: '35px', right: '0' }}>
                  <div className="cover" onClick={toggleColorPicker} style={{ position: 'fixed', top: '0', right: '0', bottom: '0', left: '0' }} />
                  <SketchPicker color={selectedColor} onChangeComplete={handleColorChange} colors={COLOR_OPTIONS} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={classnames('card-body', `bg-${selectedColor.replace('#', '')}`)}>{children}</div>
      </div>
    </div>
  );
}

Columna.propTypes = {
  titulo: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Columna;