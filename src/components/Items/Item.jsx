

function Item({ item }){
    console.log(item.url);
    return (
        <div className="item">
            <h1>{item.name}</h1>
            <p>{item.status}</p>
            <p>{item.species}</p>
        </div>
    )
}
export default Item;