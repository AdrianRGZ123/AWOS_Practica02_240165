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

// 4 STRING (Cadena de cararcteres)

var fullnameOwner="Adrian Rios Gomez";
let nameProperty="Hermosa Casa en la playa de puertovallarta";
let descriptionProperty="Casa de 2 pisos, 4 habitaciones, 2 baños completos y estacionaminetos para 2 automoviles  a orilla del MAR.";
var statusProperty="Disponible";
const typeProperty="C";
var addressProperty = "Av. Principal";


/*Los tipos de datos STRING  son un palabras, valores cualitativos de las entidades de nuestra 
aplicacion, que no tiene un tamaño maximo y que estan conformados por caracter alfabetico,
caracteres especiales coomo acentos simbolos de algunn idioma */

console.warn("4.STRING (CADENA DE CARÁCTERES , PALABRAS)");
console.log(`El usuario:${fullnameOwner},
    esta vendiendo o rentado: ${nameProperty},
     que consiste en: ${descriptionProperty}
        actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`)
    console.log(`Las variables declaradas son del tipo:
            fullnameOwner :   ${typeof(fullnameOwner)}
            nameProperty :   ${typeof(nameProperty)}
            descriptionProperty:  ${typeof(descriptionProperty)}
            statusProperty :   ${typeof(statusProperty)}
            typeProperty :   ${typeof(typeProperty)}`);

    // Manipulando Strings, los tipos de datos cualitativos tienen ciertos métodos para manipular su valor
    // por mencionar algunos:

    // Transformar a MAYÚSCULAS
    console.log(`Nombre del Propietario ${fullnameOwner.toUpperCase()}`);
    // Transformar a minúsculas
    console.log(`Descripción de la propiedad: ${descriptionProperty.toLocaleLowerCase()}`);
    // Número de caracteres
    console.log(`Numero de letras en el tipo de Propiedad ${typeProperty.length}`);
    // Subcadena 
    console.log(`Apellido del propietario: ${fullnameOwner.slice(8,fullnameOwner.length)}`);
    //Eliminar Espacios
    console.log(`Nombre dec la propiedad: ${nameProperty.trim()}`);
    //Remplazar caracteres
    console.log(`Descripcion modificada: ${descriptionProperty.replace("MAR","RIO")}`);
    // Remplazar Todos
    console.log(`Descripcion modificada: ${descriptionProperty.toLocaleUpperCase().replaceAll("A","4")}`);

    //5.BIGINT (Entero de grandes dimensiones)

    /* Este tipo de dato permite almacenar numeros exageradamente amplios que usualmente aplicaciones
    cientificos avanzados requieren , requieren esto para no perder precision en los valores almacenados. */

    let numeroGrande=1234567890;
    let numeroGrande2=12345678901234567890;
    let numeroGrande3=123456789012345678901234567890;
    let numeroGrande4=1234567890123456789012345678901234567890;

    console.warn("5. BIGINT (Entero de gran precision)")

    console.log(`El valor de numeroGrande es: ${numeroGrande} y es soportado por : ${typeof(numeroGrande)}`);
    console.log(`El valor de numeroGrande2 es: ${numeroGrande2} y es soportado por : ${typeof(numeroGrande2)}`);
    console.log(`El valor de numeroGrande3 es: ${numeroGrande3} ya no es soportado por NUMBER y adquiere un nuevo tipo 
        siendo : ${typeof(numeroGrande3)} comienza a sufrir probelmas de precisión`);
    console.log(`El valor de numeroGrande4 es: ${numeroGrande4} ya no es soportado por NUMBER y adquiere un nuevo tipo 
        siendo : ${typeof(numeroGrande4)} comienza a sufrir probelmas de precisión`);

    numeroGrande2=BigInt("12345678901234567890");
    console.log(`Si devlaramas las variables con Bigint el valor de numeroGrande2 es: ${numeroGrande2}
    con un tipo de dato: ${typeof(numeroGrande2)}`);
    numeroGrande3=BigInt("123456789012345678901234567890");
    console.log(`Si devlaramas las variables con Bigint el valor de numeroGrande3 es: ${numeroGrande3}
    con un tipo de dato: ${typeof(numeroGrande3)}`);
    numeroGrande4=BigInt("1234567890123456789012345678901234567890");
    console.log(`Si devlaramas las variables con Bigint el valor de numeroGrande4 es: ${numeroGrande4}
    con un tipo de dato: ${typeof(numeroGrande4)}`);
    
    //6. SYMBOL (Símbolo)

    /*Es un tipo de dato que ademas de tener un tipo, un valor , asocia la ubicacion del espacion  en memoria,
    por lo que todos los valores asignados a una variable de este tipo siempre seran unicos*/

    const numero1=4;
    const numero2=4.0;
    const numero3="4";
    const numero4="4.0";
    const numero5=Symbol(4);
    const numero6=Symbol(4.0);
    const numero7=Symbol("4");
    const numero8=Symbol("4.0");

    console.log(`Valores de tipos :
        numero1 - valor : ${numero1}, tipo ${typeof(numero1)}
        numero2 - valor : ${numero2}, tipo ${typeof(numero2)}
        numero3 - valor : ${numero3}, tipo ${typeof(numero3)}
        numero4 - valor : ${numero4}, tipo ${typeof(numero4)}
        numero5 - valor : ${numero5.description}, tipo ${typeof(numero5)}
        numero6 - valor : ${numero6.description}, tipo ${typeof(numero6)}
        numero7 - valor : ${numero7.description}, tipo ${typeof(numero7)}
        numero8 - valor : ${numero8.description}, tipo ${typeof(numero8)}`);

        //Pruebas comparativas 

        if(numero1 === numero2)
            console.log("numero1 y numero2 son iguales en valor");
        else
            console.log("Las variables numero1 y numero2 no son iguales en valor");

        if(numero1 === numero3)
            console.log("Las variables numero1 y numero3 son iguales en valor");
        else
            console.log("Las variables numero1 y numero3 no son iguales en valor");
        if(numero1 === numero4)
            console.log("Las variables numero1 y numero4 son iguales en valor");
        else
            console.log("Las variables numero1 y numero4 no son iguales en valor");
        if(numero1 == numero5)
            console.log("Las variables numero1 y numero5 son iguales en valor");
        else
            console.log("Las variables numero1 y numero5 no son iguales en valor, ni en tipo de dato");
        if(numero1 == numero6)
            console.log("Las variables numero1 y numero6 son iguales en valor");
        else
            console.log("Las variables numero1 y numero6 no son iguales en valor, ni en tipo de dato");

        //7. NULL (NULO)
        /*El tipo de dato es simuilar a UNDEFINED , con la variacion de que hay un consentimiento del usuario 
        o de sistema a que esta variable intencionalmente fue inicializada con este valor */

        var isPremiumUser;
        var isNewUser;
        var lastLogin= new Date();
        var todayDate=new Date();

        console.warn("7. NULL (NULO)");
        console.log(`
            El usuario: ${usuarioLogeado}, tipo de dato: ${typeof(usuarioLogeado)}
            Fecha ultimo login: ${todayDate}, tipo de dato: ${typeof(todayDate)}
            Es nuevo Usuario: ${isNewUser}, tipo de dato: ${typeof(isNewUser)}
            Es nuevo Usuario: ${isNewUser}, tipo de dato : ${typeof(isNewUser)});
            Es usuario premium: ${isPremiumUser}, tipo dde dato: ${typeof(isPremiumUser)}`); 

            //Validacion del Usuario

            if(todayDate == lastLogin)
                isNewUser=true;
            else
                isNewUser=false;

            //Como es un usuario nuevo aun no ve,ni publica ninguna propiedad ppor defecto no interesa por el
            //momento hasta que sea premium hatsa que interactue con la plataforma

