
class Helado{

    constructor(tamanio,sabor,acompaniamiento,pago,entrega,valoracion,id){
        this.tamanio = tamanio;
        this.sabor =sabor;
        this.acompaniamiento = acompaniamiento;
        this.pago=pago;
        this.entrega=entrega
        this.valoracion = valoracion;
        this.id = id
    }  
    asignarId(array){
      this.id = array.length;
    }
    valorar(valoracion){
      this.valoracion = valoracion ;
    }
}

const HeladosCompras =[
  new Helado('1 kilo', 'Dulce de leche granizado', 'Nueces caramelizadas con miel', 'Efectivo', 'Para comer aca',10,1),
  new Helado ('1/2 kilo', 'Dulce de leche granizado', 'Nueces caramelizadas con miel', 'Mercadopago', 'Delivery',7,2),
  new Helado ('3/4 kilo', 'Frutos rojos' , 'Crema de malvaviscos', 'Mercadopago', 'Reirta en local',5,3),

new Helado ('1/4 kilo', '  Limón' , '  Coulis de fresa', 'Mercadopago', 'Para comer aca',7,4),
new Helado ('1 kilo', '  Chocolate amargo' , 'Salsa de ron', 'Mercadopago', 'Retira en local',9,5),
new Helado ('1/2 kilo', '  Frutilla con crema' , '  Caramelo de chocolate y calvados   ', 'Efectivo', 'Reirta en local',10,6),
new Helado ('3/4 kilo', 'Frutos rojos' , 'Crema de malvaviscos', 'Mercadopago', 'Delivery',9,7),
]



var  tamanio = ['1 kilo', '3/4 kilo', '1/2 kilo','1/4 kilo', 'Cucurucho'];

var sabor  = ['Dulce de leche granizado' , 'Chocolate con almendras','Dulce de leche',
'Sambayón','Chocolate amargo','Frutos rojos','Frutilla con crema','Chocolate','Limón',
'Mascarpone'];

var  acompaniamiento =['Nueces caramelizadas con miel','Tortitas de arroz','Sirope de chocolate','Salsa de chocolate','Toffee','Caramelo de chocolate y calvados',
'Coulis de fresa','Salsa de ron','Crema de malvaviscos','Galleta crujiente con chocolate',]

var  pago = ['Efectivo','Tarjeta Credito/Debito','Mercadopago']

var  entrega = ['Para comer aca','Retira en local ', 'Delivery'];





var  heladoTamanio = prompt('Seleccione el tamaño a pedir: \n0  --> 1 kilo. \n1  --> 3/4 kilo. \n2  --> 1/2 kilo. \n3  --> 1/4 kilo. \n4  --> Cucurucho . --> Ingresa X para finalizar.');
while (heladoTamanio.toUpperCase() == 'X') {
    
    
    switch (heladoTamanio) {
      case '1':
        break;

      case '2':

        break;

      case '3':

        break;


      case '4':
      

        break;


      default:
        alert('Elegiste una opción invalida');
        break;
    }   
    heladoTamanio = prompt('Seleccione el tamaño a pedir: \n0  --> 1 kilo. \n1  --> 3/4 kilo. \n2  --> 1/2 kilo. \n3  --> 1/4 kilo. \n4  --> Cucurucho . --> Ingresa X para finalizar.');

    
}



var heladoSabor = prompt('Seleccione el Sabor a pedir: \n0  -->Dulce de leche granizado. \n1  --> Chocolate con almendras. \n2  --> Sambayón. \n3  --> Chocolate amargo. \n4  --> Cucurucho. \n5  --> Frutos rojos. \n6  --> Frutilla con crema.\n7  --> Chocolate.\n8  --> Limón \n9   --> Mascarpone --> Ingresa X para finalizar.');
while (heladoSabor.toUpperCase() == 'X') {
    
    
    switch (heladoSabor) {
      case '1':
        heladoSabor.push();
        break;

      case '2':
        heladoSabor.push();
        break;

      case '3':        heladoSabor.push();
        break;

      case '4':
        heladoSabor.push();
        break;
      case '5':
        heladoSabor.push();
        break;

      case '6':     
         heladoSabor.push();

        break;

      case '7':      
        heladoSabor.push();

        break;

      case '8':      
        heladoSabor.push();

        break;
        case '9':    
            heladoSabor.push();
            break;

      default:
        alert("Elegiste una opción invalida");
        break;
    }   
    
}


var heladoAcompaniamiento = prompt('Seleccione el Acompañamiento a Agregar: \n0  -->Nueces caramelizadas con miel. \n1  --> Tortitas de arroz. \n2  --> Sirope de chocolate. \n3  --> Salsa de chocolate. \n4  --> Toffee. \n5  --> Caramelo de chocolate y calvados. \n6  --> Coulis de fresa.\n7  --> Salsa de ron.\n8  --> Crema de malvaviscos \n9   --> Galleta crujiente con chocolate ');
while (heladoAcompaniamiento.toUpperCase() == 'X') {
    
    
    switch (heladoAcompaniamiento) {
      case '1':
        heladoAcompaniamiento.push();
        break;

      case '2':
        heladoAcompaniamiento.push();
        break;

      case '3':
        heladoAcompaniamiento.push();
        break;

      case '4':
        heladoAcompaniamiento.push();

        break;
      case '5':
        heladoAcompaniamiento.push();

        break;

      case '6':
        heladoAcompaniamiento.push();

        break;

      case '7':
        heladoAcompaniamiento.push();

        break;

      case '8':
        heladoAcompaniamiento.push();

        break;
      case '9':
        heladoAcompaniamiento.push();

           break;

      default:
        alert('Elegiste una opción invalida');
        break;
    }   
    


heladoAcompaniamiento = prompt('Seleccione el Acompañamiento a Agregar: \n0  -->Nueces caramelizadas con miel. \n1  --> Tortitas de arroz. \n2  --> Sirope de chocolate. \n3  --> Salsa de chocolate. \n4  --> Toffee. \n5  --> Caramelo de chocolate y calvados. \n6  --> Coulis de fresa.\n7  --> Salsa de ron.\n8  --> Crema de malvaviscos \n9   --> Galleta crujiente con chocolate --> Ingresa X para finalizar.');

}

var heladoPago = prompt('Seleccione el metodo de pago: \n0  --> Efectivo. \n1  --> Tarjeta Credito/Debito. \n2  --> Mercadopago. \n --> Ingresa X para finalizar.');
while (heladoPago.toUpperCase() == 'X') {
    
    
    switch (heladoPago) {
      case '1':
        heladoPago.push();

        break;

      case '2':
        heladoPago.push();
        break; 

      case '3':
        heladoPago.push();
        break;


      default:
        alert('Elegiste una opción invalida');
        break;
    }   
    heladoPago = prompt('Seleccione el metodo de pago: \n0  --> Efectivo. \n1  --> Tarjeta Credito/Debito. \n2  --> Mercadopago. --> Ingresa X para finalizar. ');

    
}

var  HeladoEntrega = prompt('Seleccione la forma de Entrega: \n0  --> Para comer aca. \n1  --> Retira en local. \n2  --> Delivery.  --> Ingresa X para finalizar.');
while (HeladoEntrega.toUpperCase() == 'X') {
    
    switch (HeladoEntrega) {
      case '1':
        array.push(HeladoEntrega);

        break;

      case '2':
        array.push(HeladoEntrega);

        break;

      case '3':
        array.push(HeladoEntrega);

        break;

      default:
        alert('Elegiste una opción invalida');
        break;
    }     
    
    HeladoEntrega = prompt('Seleccione la forma de Entrega: \n0  --> Para comer aca. \n1  --> Retira en local. \n2  --> Delivery.  --> Ingresa X para finalizar.');

    
}

let  Valoracion = prompt ('ingrese su valoracion de  este helado de 1 a 10');


const HeladoElegido = new Helado (tamanio[heladoTamanio],sabor[heladoSabor],acompaniamiento[heladoAcompaniamiento],pago[heladoPago],entrega[HeladoEntrega],Valoracion);


HeladosCompras.push(HeladoElegido);

HeladoElegido.asignarId(HeladosCompras);


console.log(HeladosCompras);



alert (' Tu elección fue  un HeladoElegido ' + HeladoElegido.tamanio  + ' de sabor ' + HeladoElegido.sabor + ' acompañado de '+ HeladoElegido.acompañamiento + ' y pagaras con '+ HeladoElegido.pago + ' y lo elegiste para ' +HeladoElegido.entrega )



let valorBuscado = HeladosCompras.find(elementent => heladoPago = 'Mercadopago');

if (valorBuscado === 'Mercadopago'){
      alert ('El valor de tu compra tiene 10%  por haber elejido pagar mediante ' + HeladoElegido.pago )
        
}else{ 
    alert('no tenemos descuentos con tu forma de pago  elejida que es  ' + HeladoElegido.pago )
}



let SaborFavorito = prompt('Escribí el Sabor Favorito');

const filtrado = HeladosCompras.filter((HeladosCompras)=>HeladosCompras.sabor.toLowerCase().includes(SaborFavorito.toLowerCase()))


if (filtrado.length==0){
  alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo');

 
}else{
  alert('Tenemos entre los favoritos de todos el sabor  ' + filtrado[0].sabor);

}

let CambioSabor =  prompt ('deseas cambiar tu  sabor por ? ' + filtrado[0].sabor );

while (CambioSabor != "si" && CambioSabor != "no") {
  alert  ('debes elegir una opcion valida')
  CambioSabor =  prompt ('deseas cambiar tu  sabor por ? ' + filtrado[0].sabor );  
} 


