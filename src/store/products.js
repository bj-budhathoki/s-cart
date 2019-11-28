import {writable} from 'svelte/store'
export const products=writable([
    {id:1,name:'product-1',price:200,img:"photo.jpeg"},
    {id:2,name:'product-2',price:200,img:"photo.jpeg"},
    {id:3,name:'product-3',price:100,img:"photo.jpeg"},
    {id:4,name:'product-4',price:200,img:"photo.jpeg"},
    {id:5,name:'product-5',price:300,img:"photo.jpeg"},
])