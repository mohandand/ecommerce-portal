import {useContext} from 'react';
import { ProductsContext } from "../../context/product.context";

const Shop = () => {
  const  { products } = useContext(ProductsContext)
    return <div>
      {
        products.map(({id,name}) => {
          return<div key={id}>{name}</div>
        })
      }
    </div>
  }

  export default Shop