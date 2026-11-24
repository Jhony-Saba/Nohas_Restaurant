export type ProductUnit ="kg"|"piece"|"pack"|"box"|"bag"|"portion"|"container";
export type ProductStorage= |"fresh"|"frozen"|"chilled";
export type PreparationType= |"ready-to-cook"|"ready-to-eat"|"ready-to-heat";
export type Product ={
id:string;
name:string;
slug:string;
description:string;
price?:number;
unit:ProductUnit;
storage:ProductStorage;
preparation:PreparationType;
image?:string;
isAvailable:boolean;
}
export type Category ={
    id:string;
    name:string;
    slug:string;
    description:string;
    image?:string;
    children?:Category[];
    products:Product[];
}