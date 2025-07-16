import React, { useState } from 'react';

function DOLAR() {
  const [valor, setValor] = useState(null);
  const [fecha, setFecha] = useState('');
  const [error, setError] = useState('');

  const formatearFecha = (fechaISO) => {
    const [yyyy, mm, dd] = fechaISO.split('-');
    return `${dd}-${mm}-${yyyy}`;
  };

  const consultar = () => {
    if (!fecha) return;

    const fechaFormateada = formatearFecha(fecha);
    setError('');
    setValor(null);

    fetch(`https://mindicador.cl/api/dolar/${fechaFormateada}`)
      .then(response => {
        if (!response.ok) throw new Error('Error en la respuesta');
        return response.json();
      })
      .then(data => {
        if (data.serie && data.serie.length > 0) {
          setValor(data.serie[0]);
        } else {
          setError('No hay datos para esta fecha.');
        }
      })
      .catch(error => {
        console.error('Error al consultar la API:', error);
        setError('Ocurrió un error al consultar los datos.');
      });
  };

  return (
    <div>
      <h2>DOLAR</h2>
      <label>Selecciona una fecha: </label>
      <input
        type="date"
        value={fecha}
        max={new Date().toISOString().split('T')[0]}
        onChange={e => setFecha(e.target.value)}
      />
      <button onClick={consultar}>Consultar</button>

      {valor && (
        <p>Fecha: {fecha.split('-').reverse().join('-')} - Valor: ${valor.valor.toLocaleString('es-CL')}</p>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}

export default DOLAR;