//Estilizacion de la barra de zonas de pruebas en el DevTools en el navegador
console.log("%c Ejercicio 03: Funciones ",style_console);

//1.  Funciones prodecuderales , vacias, Void sin valor de retorno y sin parametros de entrada

function saludar(){
    console.log(`Bienvenido, ${username} al Sistema de Bienes Raices`);
}
 console.warn("1. Funciones sin valor de retorno, sin parametros");

 //Funciones procedurales sin valor de retorno ,pero que si recibe parametros es decir datos de entrada

 function saludar_usuario(username,gender){
      if (gender==="H")
         console.log("Bienvenido, ${username} al Sistema de Bienes Raices");
      else if (gender==="M")
        console.log("Bienvenida, ${username} al Sistema de Bienes Raices");
    else
        console.log("Bienvenid@, ${username} al Sistema de Bienes Raices");
 }

 console.warn("2.Funciones sin valor de retorno, con parametros de entrada");
 saludar_usuario("Adrian", "H")
  console.log("___________________________________________________________");
 saludar_usuario("Patricia", "M")
  console.log("___________________________________________________________");
saludar_usuario("Guadalupe",  null)

//3. Funciones que retornan un dato, pero no reciben datos de entrada

function fecha_actual(){
    const fecha = new Date();
    const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    const fecha_formatoMX=`${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

    return fecha_formatoMX;

}

console.warn("3. Funciones que retornan un valor, pero no tienen parametros");
let hoy= fecha_actual();
console.log(`Bienvenido al Sistema de Bienes Raices, ${hoy}`);
/* Imprimiendo el valor y el tipo de dato que es*/
console.log(fecha_actual);
console.log(typeof fecha_actual);

//4. Funciones que retornan un valor, pero que tienen parametros de entrada
function sumar(a,b){
    return a+b;
}

console.warn("4. Funciones que retornan un valor, pero que tienen parametros de entrada");
let resultado = sumar(2,3);
console.log(`El resultado de la suma es ${resultado}`);
/* Imprimiendo el valor y el tipo de dato que es*/
console.log(sumar);
console.log(typeof sumar);

//5. Funciones que retornan un valor, y reciben parametros de entrada

function login(username,password)
{
    let uservalidation = false;
    if (username==="admin" && password=="1234"){
        uservalidation = true;
        console.log("Bienvenido al Sistema de Bienes Raices");
   }
    else if(username==="admin" && password!="1234"){
        uservalidation = false;
        console.log("Contraseña incorrecta");
   }
   else if(username!="admin" && password=="1234"){
    uservalidation = false;
    console.log("El nombre del usuario no existe ");
   }
   else if(username!="admin" && password!="1234"){
    uservalidation = false;
    console.log("Por favor verifica el nombre y contraseña del usuario");
   }
     return uservalidation;
   }
 
   console.warn("4. Funciones que retornan un dato, pero tambien recibenparametros de entrada");
   var loginStatus;
   //Test 1 - Usuarios y Contraseñas correctos
   console.log(`Test 1 - usuario: admin, password: 1234`);
   loginStatus= login("admin","1234");
   console.log(`
    ${loginStatus ?`El usuario admin no se ha logueado satisfactoriamente`:`Hubo un error el el login del usuario admin`}`);
   //Test 2 - Usuarios y Contraseñas correctos
   console.log(`Test 2 - usuario: administrador, password: 12345`);
   loginStatus= login("administrador","12345");
   console.log(`
    ${loginStatus ?`El usuario admin  se ha logueado satisfactoriamente`:`Hubo un error el el login del usuario admin`}`);
   //Test 3 - Usuarios y Contraseñas correctos
   console.log(`Test 3 - usuario: admin, password: 1234567890`);
   loginStatus= login("admin","123456789");
   console.log(` 
    ${loginStatus ?`El usuario admin  se ha logueado satisfactoriamente`:`Hubo un error el el login del usuario admin`}`);
   //Test 4 - Usuarios y Contraseñas correctos
   console.log(`Test 4 - usuario: adrian, password: mipassword`);
   loginStatus= login("adrian","mipassword");
   console.log(`
    ${loginStatus ?`El usuario admin  se ha logueado satisfactoriamente`:`Hubo un error el el login del usuario admin`}`);

    //Funciones Anonnimas , FUNCIONES FLECHA (ARROW) , FUNCIIONES LAMBADA
    /*A Direnecia de las funciones nombradas este tipo de funciones no suleren ser reutilizadas en el codigo
    solo se ejecuta una sola vez , dando velocidad , individualidad y privacidad a los datos utilizados en 
    el proceso*/

    //Funcion anonima sin parametros 
    isNewUser = function(){
      const hoy =new Date();

      return(
        lastLogin.getFullYear() === hoy.getFullYear() &&
        lastLogin.getMonth() === hoy.getMonth() &&
        lastLogin.getDate() === hoy.getDate()
      );
    };
    
    console.warn("5. Funciones anonimas sin parametros")

    console.log("Test 1 - Fecha del ultimo acceso es igual a la fecha del dia de hoy")
    console.log(`La fecha del ultimo acceso es: ${lastLogin}`);
    console.log(`El usuario logueado es: ${isNewUser? "Nuevo usuario":"Usuario Antiguo."}`);

     console.log("_ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _  _ _ _ _  _")
     lastLogin=new Date("2025/12/31")
    console.log("Test 2 - Fecha del ultimo acceso es diferente a la fecha del dia de hoy")
    console.log(`La fecha del ultimo acceso es: ${lastLogin}`);
    console.log(`El usuario logueado es: ${isNewUser? "Nuevo usuario":"Usuario Antiguo."}`);

   