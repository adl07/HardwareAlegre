

const Datos = [{
    id: 1,
    title: "Mouse Logitech",
    description: "G203 Lightsync RGB Black ",
    price: "3.950",
    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_902544-MLA44137253777_112020-O.webp"
},
{
    id: 2,
    title: "Procesador AMD Ryzen 7 PRO",
    description: "4750G + Wraith Stealth Cooler",
    price: "56.850",
    pictureUrl: "https://malditohard.com.ar/img/migration/PROCESADOR-AMD-RYZEN-7-PRO-4750G-MPK-CON-VIDE.webp"
},
{
    id: 3,
    title: "Mother Asrock Z390 Phantom",
    description: "Gaming 4S Wi-Fi BULK Pack",
    price: "17.700",
    pictureUrl: "https://www.northcomputers.com.ar/Temp/App_WebSite/App_PictureFiles/Items/09010_800.jpg"
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

