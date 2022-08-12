import Imagenes from "./Imagenes/Imagenes";

const Datos = [{
    id: 1,
    title: "Mouse Logitech",
    description: "G203 Lightsync RGB Black ",
    price: "3.950",
    pictureUrl: Imagenes[1],
    categoria: "mouse",
},
{
    id: 2,
    title: "Procesador AMD Ryzen 7 PRO",
    description: "4750G + Wraith Stealth Cooler",
    price: "56.850",
    pictureUrl: Imagenes[2],
    categoria: "procesador",
},
{
    id: 3,
    title: "Mother Asrock Z390 Phantom",
    description: "Gaming 4S Wi-Fi BULK Pack",
    price: "17.700",
    pictureUrl: Imagenes[0],
    categoria: "mother",
}
];

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Datos)
        }, 500)
    })
}

export const getCategoria = (catId)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(Datos.filter(dat=> dat.categoria === catId))
        }, 500)
    })
}

export const getProductoDetalle = (detId)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(Datos.filter(det => det.id === detId))
        }, 500)
    })
}
