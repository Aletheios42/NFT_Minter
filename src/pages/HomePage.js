// src/pages/HomePage.js
import React, { useState } from "react";
import NetworkSelector from "../components/NetworkSelector";
import ImageUploader from "../components/ImageUploader";
import AddressList from "../components/AddressList";

const HomePage = () => {
  const [network, setNetwork] = useState("");
  const [image, setImage] = useState(null);
  const [addresses, setAddresses] = useState([]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mint PoAPs</h1>

      {/* Selector de red */}
      <NetworkSelector network={network} setNetwork={setNetwork} />

      {/* Carga de imagen a IPFS */}
      <ImageUploader image={image} setImage={setImage} />

      {/* Lista de direcciones */}
      <AddressList addresses={addresses} setAddresses={setAddresses} />
    </div>
  );
};

export default HomePage;
