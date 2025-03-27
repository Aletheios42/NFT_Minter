// src/components/AddressList.js
import React, { useState } from "react";

const AddressList = ({ addresses, setAddresses }) => {
  const [newAddress, setNewAddress] = useState("");

  const handleAddAddress = () => {
    if (newAddress && !addresses.includes(newAddress)) {
      setAddresses([...addresses, newAddress]);
      setNewAddress("");
    }
  };

  return (
    <div>
      <h3>Lista de Direcciones</h3>
      <input
        type="text"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
        placeholder="Añadir dirección"
      />
      <button onClick={handleAddAddress}>Añadir</button>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>{address}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
