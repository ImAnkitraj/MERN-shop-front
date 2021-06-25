import { atom } from "recoil";

export const cartState = atom({
    key:'cartState',
    default:[]
})


export const errorModalState = atom({
    key:'errorModalState',
    default: false,
})

 export const detailModalState = atom({
     key:'detailModalState',
     default: false,
 })

 export const productState = atom({
     key:'productState',
 })

 export const errorState = atom({
     key:'errorState'
 })

 export const productsState = atom({
     key:'productsState',
     default:[]
 })

 export const productType = atom({
     key:'productType',
     default:''
 })

 export const productIdsState = atom({
     key:'productIds',
     default:[]
 })