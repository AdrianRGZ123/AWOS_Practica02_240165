//Estilizacion de barra de pruebas en el DevTools en el navegador
console.log("%cEjeciciio 04: objetos",style_console);

console.warn("1.Propiedades de un Objeto ");

let propertyID=1;
let propertyName="Departamento en el centro de la ciudad de Mexico";
let propertyDescription="Hermoso departament de 3 recamaras . 1 baño y 1 cajon";
let propertyType="D"; // H:House , D:Departamento , T:Terrain , Locale w: warehouse C:Cabain
let propertyIsSellable=false; //Se vende ?
let propertyIsRentable=true;  //Se Renta ?
let propertyPrice= 7500.00
let properteLat =19.4383813;
let propertyLong = -99.1020177;
let propertyToken =Symbol("D-12558-CDMX-S");
let propertyIncludedSercives =["Agua","Luz","Gas"];
let propertyImage= null;
let propertyOwnerID=324112;
let propertyStatus="Good";

console.log(`Dats de la propiedad en RENTA:
    Nombre:${propertyName}
    Descripcion:${propertyDescription}
    Tipo:${propertyType}
    Precio:${propertyPrice}
    Ubicacion: Latitud:${properteLat} Longitud:${propertyLong}
    Servicios incluidos:${propertyIncludedSercives}
    En renta:${propertyIsRentable}
    En venta:${propertyIsSellable}
    Token:${propertyToken.description}
    Dueño:${propertyOwnerID}
    Imagen:${propertyImage}  `);

    //2. Declaracion de un objeto
    /*Para declarar un objeto en JS es necesario asignarles un nombre y todas sus propiedades
    iran entre {} y separadas en coma por orden clave - valor */
    console.warn("2. Declaracion del objeto property1 ");
    property1= {
        id:1,
        name:"Departamento en el centro de la ciudad de Mexico",
        description:"Hermoso departament de 3 recamaras . 1 baño y 1 cajon",
        type:"D",
        price:7500.00,
        isRentable:true,
        isSellable:false,
         includedServices:["Agua","Luz","Gas"],
        lat:19.4383813,
        long:-99.1020177,
        status:"Good",
        token:Symbol("D-12558-CDMX-S"),
        ownerID:324112
        
    };

//Impresio del objeto en formato JSON

console.table(property1);

//3.Leyendo las propiedades de un objeto
/*Un objeto es un conjunto de variables que abstrean una entidad fisica o conceptual de la 
que es significativo almacenar informacion para el programa o sistema que estemos
dessarollando.

Para acceder a las propiedades individuales basta ccon poner el nombre de un objeto un "." y el
nombre de la propiedad */

console.warn("3. Lectura de propiedades de un objeto ");

console.log(`El usuario con Id:${property1.ownerID} esta rentando un ${property1.name}
el cual se describe como: ${property1.description} por un precio de ${property1.price} con los
servicios incluidos: ${property1.includedServices} 
${property1.isSellable ? ", actualmente esta a la venta" : ", que por el momento no esta a la venta"}.`);

//4.Modificacion de los valores de las propiedades de un objeto
/* Para modifica los datos de una variable basta con ecceder a la propiedad deseada a
modificar y asignarle su nuevo atravez del signo = */
console.warn("4.MOdificacion de propiedades de un objeto ");

property1.price=8200.00;
property1.isSellable=true;
property1.includedServices=["Agua","Luz","Gas","Internet","Seguridad Privada"];

console.log(`El usuario con Id:${property1.ownerID} esta rentando un ${property1.name}
el cual se describe como: ${property1.description} por un precio de ${property1.price} con los
servicios incluidos: ${property1.includedServices} 
${property1.isSellable ? ", actualmente esta a la venta" : ", que por el momento no esta a la venta"}.`);



//Destructuracion de objetos (OBJECT DESTRUCTURING)
/*JavaScript es un lenguaje dinamico que permite que un objeto previamente definido pueda ser
descompuesto en pequeñas nuevas partes (variables) para que estas puedan ser manipulados segun 
sea la necesidad*/

const user1 = {
    userID: 324112,
    name: "Adrian",
    email: "adrian@gmail.com",
    createdAt: new Date("2015-01-30T23:15:52"),
    lastLogin: new Date("2026-01-20T08:00:05"),
    userRole: "Vendedor",
    totalProperties: 12,
    rating: 9.4
};

const user2 = {
    userID: 48571,
    name: "Carlos",
    email: "carlos@gmail.com",
    createdAt: new Date("2024-08-20T15:08:58"),
    lastLogin: new Date("2026-01-19T23:15:35"),
    userRole: "Comprador",
    rating: 8.5,
    lastOperation: "Buscando departamento para rentar"
};

const user3 = {
    userID: 60141,
    name: "Natalia",
    email: "natalia@gmail.com",
    createdAt: new Date("2024-06-01T15:08:58"),
    lastLogin: new Date("2026-06-15T23:15:35"),
    userRole: "Comprador",
    rating: 8.5,
    lastOperation: "Buscando departamento para rentar"
};

const user4 = {
    userID: 60142,
    name: "Paulina",
    email: "paulina@gmail.com",
    createdAt: new Date("2023-03-01T01:08:58"),
    lastLogin: new Date("2026-07-15T12:15:01"),
    userRole: "Comprador",
    rating: 8.5,
    lastOperation: "Buscando departamento para rentar"
};

console.warn("5.Desestrcturacion de Objetos")
const buyerBid=(seller, buyer, property, price_bidded)=>{

    const{userID:sellerID, email: sellerEmail}=seller;
    const{userID:buyerID, email: buyerEmail}=buyer;
    const{price,id}=property;
    fecha_oferta=new Date();

    console.log(`El usuario: ${buyerID} esta realizando una oferta al usuario: ${sellerID}
    por la cantidad de ${price_bidded} por la propiedad: ${id} con fecha: ${fecha_oferta}`);


    return{
        buyerID,
        sellerID,
        propertyPrice:price,
        date_bidded: fecha_oferta,
        bid_accurate: ((price_bidded / price) * 100).toFixed(2) + "%"

    }
}

// Test 1:El usuario 2 realiza una oferta de 7500
let bid1=buyerBid(user1,user2,property1,7500);
console.log(`La oferta tiene una exactitud de ${bid1.bid_accurate}`);


// Test 2:El usuario 2 realiza una oferta de 7500
let bid2=buyerBid(user1,user3,property1,8200);
console.log(`La oferta tiene una exactitud de ${bid2.bid_accurate}`);


// Test 3:El usuario 2 realiza una oferta de 7500
let bid3=buyerBid(user1,user4,property1,10000);
console.log(`La oferta tiene una exactitud de ${bid3.bid_accurate}`);
