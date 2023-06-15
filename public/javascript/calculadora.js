const funcionPredeterminada = () => {
  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let vph = parseFloat(document.getElementById('valorPorHora').value);
    let iph = parseFloat(document.getElementById('interfazHoras').value);
  
    let resultado = vph + iph ;
    document.getElementById('valorTotal').value = resultado;
  });
};

funcionPredeterminada();

