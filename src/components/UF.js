import React, { useState } from 'react';

function UF() {
  const [valor, setValor] = useState(null);
  const [fecha, setFecha] = useState('');

  const formatearFecha = (fechaISO) => {
    const [yyyy, mm, dd] = fechaISO.split('-');
    return `${dd}-${mm}-${yyyy}`;
  };

  const consultar = () => {
    if (!fecha) return;

    const fechaFormateada = formatearFecha(fecha);

    fetch(`https://mindicador.cl/api/uf/${fechaFormateada}`)
      .then(response => {
        if (!response.ok) throw new Error('Error en la respuesta');
        return response.json();
      })
      .then(data => {
        if (data.serie && data.serie.length > 0) {
          setValor(data.serie[0]);
        } else {
          setValor(null);
        }
      })
      .catch(error => {
        console.error('Error al consultar la API:', error);
        setValor(null);
      });
  };

  return (
    <div>
      <h2>UF</h2>
      <label>Selecciona una fecha: </label>
      <input
        type="date"
        value={fecha}
        max={new Date().toISOString().split('T')[0]}
        onChange={e => setFecha(e.target.value)}
      />
      <button onClick={consultar}>Consultar</button>

      {valor ? (
        <p>Fecha: {valor.fecha.slice(0, 10)} - Valor: ${valor.valor.toLocaleString('es-CL')}</p>
      ) : (
        fecha && <p>No hay datos para esta fecha.</p>
      )}
    </div>
  );
}

export default UF;
