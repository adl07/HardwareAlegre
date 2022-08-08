import Imagenes from "../Imagenes/Imagenes";

const Datos = [{
    id: 1,
    title: "Mouse Logitech",
    description: "G203 Lightsync RGB Black ",
    price: "3.950",
    pictureUrl: Imagenes[0]
},
{
    id: 2,
    title: "Procesador AMD Ryzen 7 PRO",
    description: "4750G + Wraith Stealth Cooler",
    price: "56.850",
    pictureUrl: Imagenes[1]
},
{
    id: 3,
    title: "Mother Asrock Z390 Phantom",
    description: "Gaming 4S Wi-Fi BULK Pack",
    price: "17.700",
    pictureUrl: Imagenes[2]
}
];

const getData = new Promise((resolve, reject) => {
    let estado = true;
    if(estado){
        setTimeout(()=>{
            resolve(Datos)
        }, 2000);
    }
    else{
        reject(console.log("No hay datos"))
    }
});

export default getData;

