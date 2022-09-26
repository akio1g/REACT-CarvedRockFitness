import { useNavigate, useParams } from "react-router-dom"
import React from "react";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
import { useState } from "react";

export default function Detail() {

    const navi = useNavigate();
    const { id } = useParams();
    const { data: product, loading, error } = useFetch(`products/${id}`)
    const [sizeChoosed, setSizeChoosed] = useState('');

    console.log(product);

    if (loading) return <Spinner />;
    if (!product) return <h1>Page not Found</h1>;
    if (error) throw error;

    return (

        <div id="detail">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p id="price">${product.price}</p>
            <select
                id="size"
                value={sizeChoosed}
                onChange={(e) => setSizeChoosed(e.target.value)}
            >
                <option value="">What Size?</option>
                {product.skus.map((sku) => (
                    <option key={sku.sku} value={sku.sku}>{sku.size}</option>
                ))}
            </select>
            <p>
                <button 
                    className="btn btn-primary"
                    onClick={() => navi("/cart")}
                    disabled={!sizeChoosed}
                >Add to cart</button>
            </p>
            <img src={`/images/${product.image}`} alt={product.category} />
        </div>
    )
}