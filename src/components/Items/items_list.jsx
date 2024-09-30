import { useEffect, useState } from "react";
import Item from './Item'
import { useSelector } from "react-redux";
import Header from "../header/Header";
function Items({items}){
    
    return (
        <div>
            {items.map((item, index)=>
            <Item item={item} key={index}/>)}
        </div>
    )
}
export default Items ;