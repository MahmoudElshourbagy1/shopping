import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}
export const formatPrice = (price:number)=>{
    return new Intl.NumberFormat("en-Us",{
        style:"currency",
        currency:"USD",
    }).format(price)
}
