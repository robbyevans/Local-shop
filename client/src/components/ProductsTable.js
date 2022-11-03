import React, { useState, useEffect } from "react";

function ProductsTable({ storeId }) {
  console.log(storeId);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/stores/${storeId}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => setProducts(data.items));
      }
    });
  }, [storeId]);

  console.log(products);

  //design table
  return (
    <div>
      <div className="ptable-container">
        <p >Paid and non-paid products</p>
        <table className="stable">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>not paid</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsTable;
