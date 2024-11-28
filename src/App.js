import React, { useState } from "react";
import NetworkSelector from "./components/NetworkSelector";
import ImageUploader from "./components/ImageUploader";
import MintButton from "./components/MintButton";

function App() {
  const [network, setNetwork] = useState("ethereum");
  const [cid, setCID] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mint NFTs on Multiple Networks</h1>
      <NetworkSelector network={network} setNetwork={setNetwork} />
      <ImageUploader setCID={setCID} />
      <MintButton network={network} cid={cid} />
    </div>
  );
}

export default App;
