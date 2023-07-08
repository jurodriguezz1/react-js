import React, { useState, useEffect } from 'react';
import productsData from './products.json';

function Catalogo() {
const [products, setProducts] = useState([]);

useEffect(() => {
    const fetchData = async () => {
    setProducts(productsData);
    };
    fetchData();
}, []);

const Product = ({ id, name, stock, onAddToCart }) => {
    // Implementación del componente Product
    return (
    <div>
        <h3>{name}</h3>
        <p>Stock: {stock}</p>
        <button onClick={() => onAddToCart(id)}>Agregar al carrito</button>
    </div>
    );
};

const handleAddToCart = (productId) => {
    setProducts((prevProducts) =>
    prevProducts.map((product) => {
        if (product.id === productId && product.stock > 0) {
        return { ...product, stock: product.stock - 1 };
        }
        return product;
    })
    );
};

return (
    <div className="App">
    <h2>Catalogo</h2>
    {products.map((product) => (
        <Product
        key={product.id}
        id={product.id}
        name={product.name}
        stock={product.stock}
        onAddToCart={handleAddToCart}
        />
    ))}
    </div>
);
}

export default Catalogo;