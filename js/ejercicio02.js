//Tipos de Datos en Java Script

//Personalizacion de salidas a consola
//const bg="liner-grandient(45deg, rgba(52,152,219,1) 0% rgba(26,188,156,1) 50%)";
//const style_console=`backgroun:${bg}; color:white; border-radius:6px;
//padding:4px; font-size:1.0rem; font-weight:bold `

console.log("%c2.-Ejercicio02: Tipos de Datos",style_console);

/* 1.Undefined - valor por defectoasignado a variables declaradas pero no 
inicializadas, no es igual a null*/
console.warn("1.- UNDEFINED)(No Definido)")
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso=undefined;

console.log("Valoes actuales de las variables");
console.log(`usuarioLogeado= ${usuarioLogeado}`);
console.log(`rolUsuario= ${rolUsuario}`);
console.log(`ultimoAcceso= ${ultimoAcceso}`);

/* En JavaScript existe el metodo typeof() que nos devuelve el tipo de dato de una 
variable preficamente declarada.*/

console.log("Tipos de datos de las variables declaradas :");
console.log(`usuarioLogeado= ${typeof usuarioLogeado}`);
console.log(`rolUsuario= ${typeof rolUsuario}`);
console.log(`ultimoAcceso= ${typeof ultimoAcceso}`);

/*supongamos que un usuario denominado Adrian se ha logueado exitosamente, el valor de la 
variable devera actualizarse a username*/

usuarioLogeado="Adrian";

//Pero no solo cambiara su valor , tambien cambiara su tipo 

console.log(`El valor del usuarioLogeado es: ${usuarioLogeado} y su tipo es: ${typeof usuarioLogeado}`);

/*2. Boolean (TRUE/FALSE) -Verdadero o Falso*/
 var hayUsuarioLogeado=false;

 /* Supongamos que nuestra app tendra un menu especifico para los usuarios 
 registrados, en el podraan visualizar sus mensajes o estado de sus publicaciones de 
 de renta o venta de propiedades, a diferencia de un usuario  que entra de manera incognita
 a visualizar las propiedades */

function validacionUsuarioLogueado(){
 console.log(`El valor de  la la variable hayUsuarioLogeado es: ${hayUsuarioLogeado} y su tipo es: ${typeof (hayUsuarioLogeado)}`);

 if(hayUsuarioLogeado === true)
{
    console.log("Dado que se ha logueado  un usuario la app mostrara el menú de usuario");

}else if(hayUsuarioLogeado)
{
    console.log("Dado que no hay usuario logueado la app mostrara el menú de usuario");
} else{
    console.log("No puede procesar este tipo de dato, requiere n booleano");
}
}

//test1 :Usuario logueado= true

hayUsuarioLogeado=true;
console.log("Test 1 ")
validacionUsuarioLogueado();

//test2 :Usuario logueado= false
hayUsuarioLogeado=false;
console.log("Test 2 ")
validacionUsuarioLogueado();

//test3: Usuario logueado a cualquier otra cosa
console.log("Test 3 ")
hayUsuarioLogeado=52.2;
validacionUsuarioLogueado();

//3. NUMBER (Numéricos)
console.warn("3.- NUMBER (Numéricos)")
/*Es importatnte saber que Java Script a difeencia de otros lenuajes no diferencia 
los datos de tipo numerico ,lo que para otros lenguajes de programacion lo que un 
ENTERO (INT) ,FLOTANTE (FLOAT), DECIMAL DOBLE (DOOUBLE),Para el solo son números (NUMBER)*/

 
let userID = 225;
let costoPropiedad = 125000.50
let latitudGPS=20.240508
let altitudGPS=97.952881
let longitudGPS=1180    

console.log(`Los valores delas variables declaradas para los datos de la propiedad son:
    ID del Usuario propietario: ${typeof(userID_Owner)}
    Precio de la propiedad: ${typeof(priceProperty)}
    Latitud (GPS): ${typeof(latGPS)} 
    Longitud (GPS) : ${typeof(longGPS)}
    Altitud (GPS): ${typeof(altGPS)}`);