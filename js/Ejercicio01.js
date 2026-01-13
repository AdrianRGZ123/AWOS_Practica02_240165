//Comentarios en una sola linea 

/*Comentarios
  ....
  Multilinea
  */
//Personalizacion de salidas a consola
const bg="linear-gradient(45deg, rgba(52,152,219,1) 0%, rgba(26,188,156,1) 50%)";
const style_console=`background :${bg}; color:white; border-radius:6px;
padding:4px; font-size:1.0rem; font-weight:bold `

//Declaracion de variables en Java Script
//1. Utilizando la palabra reservada var
console.log("%c1.-Declaracion de variables",style_console);
//Utilizaremos el metodo WARN para estilizar las respuestas de las pruebas realizadas a
//nuestro código y facilitar su revision

console.warn("--Decclaracion de variables Utilizando el prefijo VAR--");

var miNombre="Adrian Rios"
console.log("El valor almacenado en la variable miNombre es: ",miNombre);

//modificar el valor de la varianble
var miNombre="Adrian"
console.log("El valor almacenado en la variable miNombre es: ",miNombre);

var misApellidos="Rios Gomez";
console.log("El valor almacenado en la variable misApellidos es: ",misApellidos); //undefined
//Una variable cambiar su valor durante la ejecucion del programa

console.warn("--Decclaracion de variables Utilizando el prefijo CONST--");
//2. Utilizando la palabra reservada CONST
/*Una constante a diferencia de una variable es que su valor no cambiara su valor durante  toda la 
ejecucion  del programa ,y al momento de ser declrarada esta deve ser inicializada obligatoriamente
*/
const miMatricula="240165";
console.log("El valor almacenado en la constante miMatricula es: ",miMatricula);

//Intentado modificar el valor de  mi constante
 /*miMatricula="250165";
console.log("El valor almacenado en la constante miMatricula es: ",miMatricula);
*/

//3. Utilizando la palabra reservada LET
/*LET es el prefijo utilizado muy similar a VAR con la diferencia en su enlace (SCOPE),
aquellas declaradas con VAR tienen un aclacance globlal co el codigo no importando bloques o 
secciones , mientras  que las variables daclaradas con Let solo existiran dentro del bloque o 
funcion.*/

var fechaNacimiento= new Date("2006-03-01");
var miEdad=calcularEdad(fechaNacimiento);

console.log("tu edad es: ",miEdad,"años");

//verificamos si es mayor de edad 
if(miEdad >=18)
{
    var esMayorDeEdad = true;
    let esMenorDeEdad = false;
}

if(esMayorDeEdad)
    console.log("Eres mayor de edad");
else
    console.log("Eres menor de edad");

//console.log("El valor de es menor de edad es: ",esMenorDeEdad);
function calcularEdad(fechaNacimiento)
{
    //para calcular la edad requerimos de la fecha del dia de hoy
    var fechahoy = new Date();

    /*Dado que los datos de la fecha son almacenados en milisegudos por default en 
    JavaScript, necesitamos una variable que nos permite saber el numero de milisegudos
    por dia */
    let miliSegundosPorDia=24*60*60*1000;

    //ya que tenemos los milisegudos por dia tenemos que restar la fecha de hoy ,la fecha
    // en que nacimos para calcular los milisegundos que hemos vivido

    let diasVividos=(fechahoy-fechaNacimiento)/miliSegundosPorDia;
    
    //Invocamos el metodo matematico de la fucion piso (FLOOR)
    diasVividos=Math.floor(diasVividos);
    var edad=diasVividos/365.25
    edad=Math.floor(edad);

    return edad;
}
//Interpolacion de Datos

// ${}
console.log(`Hola, ${miNombre} ${misApellidos} actualmente tienes ${miEdad} años` );
//Autor : Adrian Rios Gomez