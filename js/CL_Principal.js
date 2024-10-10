import CL_contratado from "./CL_Contratado.js";
import CL_fijo from "./CL_Fijo.js";

let profcontra= new CL_contratado("Rafael",30,15)

let salida=document.getElementById("salida")

salida.innerHTML=`
Nombre del profesor Contratado:${profcontra.nombre}
<br>Monto del Bono:$${profcontra.bono}
<br>cantidad de horas:${profcontra.horas}
<br>Ingreso total del profesor ${profcontra.nombre}:$${profcontra.sueldo()}`