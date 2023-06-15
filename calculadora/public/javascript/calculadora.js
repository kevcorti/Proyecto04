const funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let vph = float(document.getElementById('valorPorHora'));
        let iph = float(document.getElementById('interfazHoras'));
        let resultado = vph + iph;
        document.getElementById('valorTotal').textContent = resultado;

      })
    
  };
  

  funcionPredeterminada();