//            moneda[0]      moneda[1]     moneda[2]        moneda[3]    moneda[4]    moneda[5]
var moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
//                  "NaN"             1           19.87        3895.32          0.84     0.72
var tasas = ["NaN",1,19.87,3895.32,0.84,0.72];

// Arrays para conversiones de tasas!!!
var dolarAOtros = new Array();
var mepAOtros = new Array();
var copAOtros = new Array();
var euroAOtros = new Array();
var librasAOtros = new Array();

document.getElementById("convertidor").addEventListener('click', function(e){  // Evento que se desencadena con el botón "covertidor", para ejecutar la conversión de tasas de cambio...
    
    var monto = document.getElementById("cantidadDinero").value;

    var seleccion1 = document.getElementById("moneda1");
    var seleccion11 = seleccion1.options[seleccion1.selectedIndex].text;
 
    var seleccion2 = document.getElementById("moneda2");
    var seleccion22 = seleccion2.options[seleccion2.selectedIndex].text;
    
    var cambio = 0;



   tasas.forEach(dollarToOthers);

          function dollarToOthers (e){
          tasaCambio = (monto*e).toFixed(2);
          console.log(tasaCambio);
          dolarAOtros.push(tasaCambio);
        }


 
    tasas.forEach(mepToOthers);

      function mepToOthers (e) {
        tasaCambio = (monto*e/tasas[2]).toFixed(2);
        console.log(tasaCambio);
        mepAOtros.push(tasaCambio);
        }


    tasas.forEach(copToOthers);

        function copToOthers (e) {
          tasaCambio = (monto*e/tasas[3]).toFixed(2);
          console.log(tasaCambio);
          copAOtros.push(tasaCambio);
          }


    tasas.forEach(euroToOthers);

    function euroToOthers (e) {
      tasaCambio = (monto*e/tasas[4]).toFixed(2);
      console.log(tasaCambio);
      euroAOtros.push(tasaCambio);
      }

      console.log("---");
      tasas.forEach(gbpToOthers);

      function gbpToOthers (e) {
        tasaCambio = (monto*e/tasas[5]).toFixed(2);
        console.log(tasaCambio);
        librasAOtros.push(tasaCambio);
        } 


    if (isNaN(monto)) {

          const para = document.createElement("p");
          const node = document.createTextNode("Valor erróneo, intente de nuevo!!");
          para.appendChild(node);
          document.getElementById("div2").appendChild(para);
          document.getElementById("div2").setAttribute("id","indicacionAlerta");
          location.reload();
        }
        else if(seleccion11 == seleccion22){

            var para = document.createDocumentFragment();
            para.appendChild(document.getElementsByTagName("LI")[0]);
            para.childNodes[0].childNodes[0].nodeValue = monto+" "+seleccion11+" equivale(n) a: "+monto+" "+seleccion22+"!!";
            document.getElementsByTagName("UL")[0].appendChild(para);
        } 
        

        else if(seleccion11 == moneda[1] && seleccion22==moneda[2]){
          cambio = dolarAOtros[2];
          
          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[1]+" equivale(n) a: "+cambio+" "+moneda[2];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // Dolar a MEP

        else if(seleccion11 == moneda[1] && seleccion22==moneda[3]){
          cambio = dolarAOtros[3];
        
          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[1]+" equivale(n) a: "+cambio+" "+moneda[3];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // Dolar a COP

        else if(seleccion11 == moneda[1] && seleccion22==moneda[4]){
          cambio = dolarAOtros[4];
    
          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[1]+" equivale(n) a: "+cambio+" "+moneda[4];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // Dolar a Euro

        else if(seleccion11 == moneda[1] && seleccion22==moneda[5]){
          cambio = dolarAOtros[5];
          
          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[1]+" equivale(n) a: "+cambio+" "+moneda[5];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // Dolar a Libra Esterlina


        else if(seleccion11 == moneda[2] && seleccion22==moneda[1]){
          cambio = mepAOtros[1];
          
          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[2]+" equivale(n) a: "+cambio+" "+moneda[1];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // MEP a Dolar

        else if(seleccion11 == moneda[2] && seleccion22==moneda[3]){
          cambio = mepAOtros[3];

          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[2]+" equivale(n) a: "+cambio+" "+moneda[3];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // MEP a COP 

        else if(seleccion11 == moneda[2] && seleccion22==moneda[4]){
          cambio = mepAOtros[4];
         
          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[2]+" equivale(n) a: "+cambio+" "+moneda[4];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // MEP a EURO

        else if(seleccion11 == moneda[2] && seleccion22==moneda[5]){
          cambio = mepAOtros[5];

          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[2]+" equivale(n) a: "+cambio+" "+moneda[5];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // MEP a Libra Esterlina


        else if(seleccion11 == moneda[3] && seleccion22==moneda[1]){
          cambio = copAOtros[1];

          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[3]+" equivale(n) a: "+cambio+" "+moneda[1];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // COP a Dolar

        else if(seleccion11 == moneda[3] && seleccion22==moneda[2]){
          cambio = copAOtros[2];

          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[3]+" equivale(n) a: "+cambio+" "+moneda[2];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // COP a MEP

        else if(seleccion11 == moneda[3] && seleccion22==moneda[4]){
          cambio = copAOtros[4];

          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[3]+" equivale(n) a: "+cambio+" "+moneda[4];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // COP a Euro

        else if(seleccion11 == moneda[3] && seleccion22==moneda[5]){
          cambio = copAOtros[5];

          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[3]+" equivale(n) a: "+cambio+" "+moneda[5];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // COP a Libra Esterlina


        else if(seleccion11 == moneda[4] && seleccion22==moneda[1]){
          cambio = euroAOtros[1];

          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[4]+" equivale(n) a: "+cambio+" "+moneda[1];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // Euro a Dolar

        else if(seleccion11 == moneda[4] && seleccion22==moneda[2]){
          cambio = euroAOtros[2];

          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[4]+" equivale(n) a: "+cambio+" "+moneda[2];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // Euro a MEP

        else if(seleccion11 == moneda[4] && seleccion22==moneda[3]){
          cambio = euroAOtros[3];

          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[4]+" equivale(n) a: "+cambio+" "+moneda[3];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // Euro a COP

        else if(seleccion11 == moneda[4] && seleccion22==moneda[5]){
          cambio = euroAOtros[5];

          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[4]+" equivale(n) a: "+cambio+" "+moneda[5];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // Euro a Libra Esterlina


        else if(seleccion11 == moneda[5] && seleccion22==moneda[1]){
          cambio = librasAOtros[1];
          console.log();

          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[5]+" equivale(n) a: "+cambio+" "+moneda[1];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // Libra Esterlina a Dolar

        else if(seleccion11 == moneda[5] && seleccion22==moneda[2]){
          cambio = librasAOtros[2];

          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[5]+" equivale(n) a: "+cambio+" "+moneda[2];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // Libra Esterlina a MEP

        else if(seleccion11 == moneda[5] && seleccion22==moneda[3]){
          cambio = librasAOtros[3];

          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[5]+" equivale(n) a: "+cambio+" "+moneda[3];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // Libra Esterlina a COP

        else {
          cambio = librasAOtros[4];
          console.log(monto+" "+moneda[5]+" equivale(n) a: "+cambio+" "+moneda[4]); 

          var para = document.createDocumentFragment();
          para.appendChild(document.getElementsByTagName("LI")[0]);
          para.childNodes[0].childNodes[0].nodeValue = monto+" "+moneda[5]+" equivale(n) a: "+cambio+" "+moneda[4];
          document.getElementsByTagName("UL")[0].appendChild(para);
        } // Libra Esterlina a Euro

        
        }

      )
      //

      