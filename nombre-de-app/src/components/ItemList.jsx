import { Item } from "../components/Item"

export const ItemLIst = ({ products }) => 
    products.map(products => <Item key={products.ropa.id} products={products} /> )
