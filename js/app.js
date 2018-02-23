
function Calculadora(){
    var display = "";
    var operacion = false;
    var division = false, multiplicacion = false, suma = false, resta = false;


    var primerOperando = 0;
    var segundoOperando = 0;
    var resultado = "";
    var teclas = document.querySelectorAll('.tecla');
    ValidarMaximoDeNumeros = function(){
      if(display.length > 7)
        display = display.substring(0,8);

    }

    Suma = function( op1,  op2){
      return op1 + op2;
    }

    Resta= function( op1,  op2){
      return op1 - op2;
    }

    Multipicacion= function( op1,  op2){
      return op1*op2;
    }

    Division= function( op1,  op2){
      return op1/op2;
    }


    AsignarEventoDeEscalaTecla = function(){
      for(var i = 0; i < teclas.length; i++){
        teclas[i].addEventListener('mousedown',  function(e){
          e = e || window.event;
          if(e.target){
            var element = e.target;
              element.style.transform = "scale(0.9,0.9)";
              var id = parseInt(element.id);
              if(id === parseInt(id,10) && !(display.length < 1 && id ===0)){
                display = display+ id;

                if(!operacion){
                  primerOperando = parseFloat(display);
                }
                else {
                  segundoOperando = parseFloat(display);
                }
                ValidarMaximoDeNumeros();
                document.getElementById('display').innerHTML = display;
              }
          }
        });
        teclas[i].addEventListener('mouseup' || 'mouseleave',  function(e){
          e = e || window.event;
          if(e.target){
            var element = e.target;
              element.style.transform = "scale(1,1)";
          }
        });
      }
    }

    var teclaON = document.getElementById('on');
    teclaON.addEventListener('mousedown', function(){
      display = "";
      primerOperando = 0;
      segundoOperando = 0;
      operacion = false;
      suma = false;
      resta = false;
      division = false;
      multiplicacion = false;
      document.getElementById('display').innerHTML = "0";
    });

    var teclaPunto = document.getElementById("punto");
    teclaPunto.addEventListener('mousedown', function(){
      if(!display.includes(".")){
        if(display.length > 0){
          display += ".";
        }
        else{
          display += "0.";
        }

        if(!operacion)
        primerOperando = parseFloat(display);
        else {
          segundoOperando = parseFloat(display);
        }
        document.getElementById('display').innerHTML = display;
      }
    });

    var teclaMenos = document.getElementById("sign");
    teclaMenos.addEventListener('mousedown', function(){
      if(display.length > 0 ){
        if(!operacion){
          primerOperando *= -1;
          display = ""+primerOperando;
        }
        else {
          segundoOperando *= -1;
          display = ""+segundoOperando;
        }
          document.getElementById('display').innerHTML = display;
      }
    });

    var teclaDivide = document.getElementById("dividido");
    teclaDivide.addEventListener('mousedown', function(){
      if(!operacion){
        operacion = true;
        display = "";
        division = true;
        document.getElementById('display').innerHTML = display;
      }
    });

    var teclaMultiplica = document.getElementById("por");
    teclaMultiplica.addEventListener('mousedown', function ()
    {
      if(!operacion){
        operacion = true;
        display = "";
        multiplicacion = true;
        document.getElementById('display').innerHTML = display;
      }
    });


    var teclaSuma = document.getElementById("mas");
    teclaSuma.addEventListener('mousedown', function ()
    {
      if(!operacion){
        operacion = true;
        display = "";
        suma = true;
        document.getElementById('display').innerHTML = display;
      }
    });

    var teclaResta = document.getElementById("menos");
    teclaResta.addEventListener('mousedown', function ()
    {
      if(!operacion){
        operacion = true;
        display = "";
        resta = true;
        document.getElementById('display').innerHTML = display;
      }
    });

    var teclaIgual = document.getElementById("igual");
    teclaIgual.addEventListener('mousedown', function(){
      if(operacion){

        if(division){
          resultado = Division(primerOperando, segundoOperando);
          division = false;
        }
        else if(multiplicacion){
          resultado = Multipicacion(primerOperando, segundoOperando);
          multiplicacion = false;
        }
        else if(suma){
          resultado =Suma(primerOperando, segundoOperando);
          suma = false;
        }
        else if(resta){
          resultado = Resta(primerOperando, segundoOperando);
          resta = false;
        }

        operacion = !operacion;
        display = ""+parseFloat(resultado);
        primerOperando = resultado;
        segundoOperando =0;
        ValidarMaximoDeNumeros();
        document.getElementById('display').innerHTML = display;
      }

    });

    AsignarEventoDeEscalaTecla();

}

var calculadora = new Calculadora();
