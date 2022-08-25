import Imagenes from "./Imagenes/Imagenes";
import{collection, doc, getDoc, getDocs, query, where} from 'firebase/firestore';
import { DB } from "./FiresbaseData";
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
    id: 2,
    title: "Procesador AMD Ryzen 7 PRO",
    description: "4750G + Wraith Stealth Cooler",
    price: "56.850",
    pictureUrl: Imagenes[2],
    categoria: "procesador",
    stock: 10
},
{
    id: 3,
    title: "Mother Asrock Z390 Phantom",
    description: "Gaming 4S Wi-Fi BULK Pack",
    price: "17.700",
    pictureUrl: Imagenes[0],
    categoria: "mother",
    stock: 10
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

export const getProductDetail = async (detId) =>{
    const docRef = doc(DB, 'Productos', detId);
    const docRefSnap = await getDoc(docRef);

    if(docRefSnap.exists()){
        return{
            id: detId,
            ...docRefSnap.data()
        }
    } else{
        console.log("No hay datos");
    }
}