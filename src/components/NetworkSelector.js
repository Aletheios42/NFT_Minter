import React from "react";

const NetworkSelector = ({ network, setNetwork }) => {
  const networks = [
    { name: "Sepolia", value: "sepolia" },
    { name: "Ethereum", value: "ethereum" },
    { name: "Avalanche", value: "avalanche" },
  ];

  return (
    <div>
      <label>Select Network:</label>
      <select value={network} onChange={(e) => setNetwork(e.target.value)}>
        {networks.map((net) => (
          <option key={net.value} value={net.value}>
            {net.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NetworkSelector;
