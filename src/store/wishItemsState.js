import {atom} from "recoil";

export const wishItemState=atom({
    key:"WishList",
    default:[{
        id:1,
        title:"laptop",
        price:70000,
        thumbnail:""
},
{
        id:2,
        title:"chair",
        price:3000,
        thumbnail:""
},
{
        id:3,
        title:"sofa",
        price:30000,
        thumbnail:""
}]
})