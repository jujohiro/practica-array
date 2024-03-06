function generarValoresDinamicamente(cantidad) {
    var array = [];
    for (var i = 0; i < cantidad; i++) {
      array.push(Math.random());
    }
    return array;
  }
  
  var arrayDinamico = generarValoresDinamicamente(4);
  console.log(arrayDinamico);