import { atom } from "recoil";

export const cartState = atom({
    key:'cartState',
    default:[]
})


 export const detailModalState = atom({
     key:'deatilModalState',
     default: false,
 })

 export const productState = atom({
     key:'productState',
 })