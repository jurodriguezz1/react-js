import { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';

import data from "../data/products.json"
import { ItemLIst  } from "../components/ItemList";

export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([null])
    useEffect(() => {
        const promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(data);
            }, 2000)
        })
        promesa.then(result => setProducts(result))
    }, [])

    return (
        <Container>
            <h1>{props.greeting}</h1>
            {products.length === 0 ? <div>Cargando</div>
            ): <ItemList products={products} />
            products.map (product =>(
                <div key={product.ropa_id}>{product.ropa_nombre}</div>
            ) ) }
        </Container>
    )
}