import React from 'react'
import {createContext} from 'react'
 import  {products}  from '../assets/assets/frontend_assets/assets';

export const ShopContext = createContext();

function ShopContextProvider(props) {
    const currency = "₹";
    const delivery_fee = 10;

    const value= {
        products, currency, delivery_fee
    }
   return (
     <ShopContext.Provider value={value}>
       {props.children}
     </ShopContext.Provider>
   )
 }
 
export default ShopContextProvider;
 