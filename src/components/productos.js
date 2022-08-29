import Imagenes from "./Imagenes/Imagenes";
import{collection, doc, getDoc, getDocs, query, where} from 'firebase/firestore';
import { DB } from "./ConfigFb/FiresbaseData";
import { async, safeGet } from "@firebase/util";

/*const Datos = [{
    id: 1,
    title: "Mouse Logitech",
    description: "G203 Lightsync RGB Black ",
    price: "3.950",
    pictureUrl: Imagenes[1],
    categoria: "mouse",
    stock: 10
},
{
    title: "Mouse HyperX",
    description: "Pulsefire Core RGB",
    price: "3.318",
    categoria: "mouse ",
    stock: 4
}
{
    id: 2,
    title: "Procesador AMD Ryzen 7 PRO",
    description: "4750G + WrSaith Stealth Cooler",
    price: "56.850",
    pictureUrl: Imagenes[2],
    categoria: "procesador",
    stock: 10
},
{
    title: "Micro Intel I5-12400F",
    description: "4.4 Ghz 18Mb S.1700",
    price: "44.241",
    categoria: "procesador",
    stock: 6
},
{
    id: 3,
    title: "Mother Asrock Z390 Phantom",
    description: "Gaming 4S Wi-Fi BULK Pack",
    price: "17.700",
    pictureUrl: Imagenes[0],
    categoria: "mother",
    stock: 10
},
{
    title: "Motherboard Gigabyte B450M",
    description: "DS3H V2 AM4",
    price: "15.435",
    categoria: "mother",
    stock: 12
},
{
    title: "Gabinete Gamer XTECH XT-GMR2 Environ ATX",
    description: "ATX/Micro-ATX/ITX",
    price: "7.663",
    categoria: "gabinete ",
    stock: 4
},
{
    title: "Gabinete Solarmax CM-5901",
    description: "X 6 Fan - Fixed Rgb",
    price: "12.165",
    categoria: "gabinete ",
    stock: 7
}
];*/

/*export async function getData () {

    //creo la referencia de la coleccion que voy a traer
    const colRef = collection(DB, 'Productos');

    const snapshot = await getDocs(colRef);
    console.log("snapshot:", snapshot.docs);
    
    const prodcutosConFormato = snapshot.docs.map((rawDoc)=>{
        return{
        id: rawDoc.id,
        ...rawDoc.data()
    }
    });

    return prodcutosConFormato;
}



export async function getCategoria (catId) {
    
    const consulta = query(collection(DB, 'Productos'), where('categoria', '==', catId));
    const snapshot2 = await getDocs(consulta);

    const prodcutosCategoria = snapshot2.docs.map((dat)=>{
        return{
        id: dat.id,
        ...dat.data()
    }
    });

    return prodcutosCategoria;

}

export const getProductoDetalle = (detId)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(Datos.find(dat=> dat.categoria === detId))
        })
    })
}*/

/*if(catId){
            const queryDocsFilter = query(queryDocs, where('categoria', '==', catId))
            getDocs(queryDocsFilter)
                .then(res => setInfo(res.docs.map(product =>({id: product.id, ...product.data()}))));
        } else {
            
        }*/
