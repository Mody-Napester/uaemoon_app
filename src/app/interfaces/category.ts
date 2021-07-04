import { Insert } from "./insert";

export interface Category{
    name:string,
    details:string,
    icon:string,
    icon_fa:string,
    picture:string,
    cover:string,
    order:number,
    inserts:Insert[],
}