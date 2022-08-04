import ItemList from "../ItemList/ItemList"

export default function Item(){
    return(
        <div className=""> 
            {info.map((prod)=>{
                return(
                    <ItemList>
                        <div key={prod.id}>
                            <p>{prod.title}</p>
                        </div>
                    </ItemList>
                )
            })
            }
        </div>
    )
}
