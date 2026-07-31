import { selector } from "recoil";
import {cartItemsState} from "./cartItemsState";

export const cartTotalSelector=selector({
    key:"cartTotalSelector",
    get:({get})=>{
        const cartItems=get(cartItemsState);

        const totalPrice=cartItems.reduce(
            (total,item)=>total+item.price*item.quantity,
            0
        );
        const totalItems=cartItems.reduce(
            (total,item)=>total+item.quantity,
            0
        );
        return{
            totalPrice,
            totalItems
        }

    }
});