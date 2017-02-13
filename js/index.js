$(function() {
  // variable regular para filtrar solo numeros enteros
  var re=/^-?[0-9]+$/;
  // Aqui sirve para no ingresar informacion basura a las cajas de texto
  document.getElementById("listaOrdenada").disabled = true;
  document.getElementById("listaDesordenada").disabled = true;
  var arrListaNumeros = [];
  $('#btnEntrar').on('click', function(){
    var number1 = $('#number').val();
    // convirtiendo el arreglo de string en entero para un mejor trato con la
    // informacion
    var number = parseInt(number1);
    // validando el ingreso de solo numeros en la caja de texto
    if(re.test(number)){
      if( arrListaNumeros.indexOf(number) < 0 ){
          arrListaNumeros.push(number);
          // ingresando los valores a la caja de texto
        $('#listaDesordenada').append(number+'<br> \n');
        // limpiar la caja de texto despues del ingreso del numero
        $('#number').val('');
      }
    }
  });

  $('#btnOrdenar').on('click', function(){
    var newListaOrdenado = [];
    var cant = arrListaNumeros.length;

    for(var i =0 ; i< cant; i++){
      var mayor =0;
      //  Se recorre el arreglo y se extrae el mayor numero
      // y ese numero se apila en un arreglo nuevo
      arrListaNumeros.forEach( function(element) {
        if(newListaOrdenado.indexOf(element)<0){
          // mayor numero encontrado
          if(mayor < element){
            mayor = element;
          }
        }
      });
      // se apila el mayor numero al nuevo arreglo
      newListaOrdenado.push(mayor);
    }
    // se agrega a la caja de texto todos los numeros ordenados
    newListaOrdenado.forEach(function(element){
      $('#listaOrdenada').append(element+'<br> \n');
    });
  });

});
