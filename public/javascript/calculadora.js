const funcionPredeterminada = () => {
  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let vph = parseFloat(document.getElementById('valorPorHora').value);
    let iph = parseFloat(document.getElementById('interfazHoras').value);
    let dhtml = parseFloat(document.getElementById('DesarrolloHTML').value);
    let estcss = parseFloat(document.getElementById('estiloCSS').value);
    let fad = parseFloat(document.getElementById('adicionales').value);
    let corr = parseFloat(document.getElementById('correcciones').value);
  
    let resultado = vph + iph + dhtml + estcss + fad + corr;
    document.getElementById('valorTotal').value = resultado;
  });
};

funcionPredeterminada();

