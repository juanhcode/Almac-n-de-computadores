const btnCalcular = document.getElementById('calcularCantidad');
const cantidadComputador = document.getElementById('cantidadComputadores');
const valorDeCompra = document.getElementById('valorCompra');
const valorDescuento = document.getElementById('valorDescuento');
const total = document.getElementById('total');
let precioComputador = 3550000;
let descuento;

//Al recargar la pagina
document.addEventListener('DOMContentLoaded', () => {

})

//El computador tendra un costo de 3.550.000
//se manejara un unico precio aunque visualmente se vean diferentes precios


//Si se compra un computador el descuento sera del 0%
//Si se compra entre 3 computadores recibira descuento del 15%
//Si se compra 6 computadores recibira descuento del 30%
//si compra  10 computadores recibe 40% de descuento
// y si compro mas de 10 recibo 0 descuento


//Eventos
btnCalcular.addEventListener('click', () => {
    let cantidad = cantidadComputador.value;
    let resultado = cantidad * precioComputador;
    valorDeCompra.value = resultado;
    if (cantidad == 1) {
        mostrarMensaje('No hay descuento para esta compra');
        total.value = resultado;
        
    } else if (cantidad == 3) {
        calcularDescuento(0.15, resultado);
    } else if (cantidad == 6) {
        calcularDescuento(0.30, resultado);
    } else if (cantidad == 10) {
        calcularDescuento(0.40, resultado);
    } else if (cantidad > 10) {
        mostrarMensaje('No hay descuento para esta compra');
        total.value = resultado;
        valorDescuento.value = 0;
    } else {
        mostrarMensaje('No hay descuento para esta compra');
        total.value = resultado;
        valorDescuento.value = 0;
    }
})

const mostrarMensaje = (msj) => {
    const descuento = document.querySelector('.descuento');
    descuento.style.color = 'red';
    descuento.style.fontSize = '20px';
    descuento.textContent = msj;
}

const calcularDescuento = (desc, resultadoT) => {
    descuento = resultadoT * desc;
    valorDescuento.value = descuento;
    total.value = resultadoT - descuento;
    if(desc==0.15){
        mostrarMensaje(`Su descuento fue del ${15}%`);
    }else if(desc==0.30){
        mostrarMensaje(`Su descuento fue del ${30}%`);
    }else if(desc==0.40){
        mostrarMensaje(`Su descuento fue del ${40}%`);
    }

}