import React, { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);


  function addProduct(e) {

    e.preventDefault();

    const product = {
      name,
      price,
      quantity,
      type
    };

    if (editIndex === null) {
      setProducts([...products, product]);
    } 
    else {
      let updated = [...products];
      updated[editIndex] = product;
      setProducts(updated);
      setEditIndex(null);
    }

    setName("");
    setType("");
    setPrice("");
    setQuantity("");
  }


  function editProduct(index) {

    setName(products[index].name);
    setType(products[index].type);
    setPrice(products[index].price);
    setQuantity(products[index].quantity);

    setEditIndex(index);
  }


  function deleteProduct(index) {

    let updated = products.filter((p, i) => i !== index);

    setProducts(updated);
    setEditIndex(null);
  }


  return (

    <div className="container">

      <h1>Sales Dashboard</h1>

      <h3>Add Product</h3>

      <form onSubmit={addProduct}>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Product Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">
          {editIndex === null ? "ADD" : "UPDATE"}
        </button>

      </form>


      <h3>Product List</h3>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {products.map((p, index) => (

            <tr key={index}>

              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.quantity}</td>
              <td>{p.type}</td>

              <td>
                <button onClick={() => editProduct(index)}>
                  Edit
                </button>

                <button onClick={() => deleteProduct(index)}>
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default App;