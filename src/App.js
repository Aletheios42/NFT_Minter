import React, { useEffect } from "react";
import { initializeContract } from "./utils/contractInteraction"; // Asegúrate de importar la función correctamente

const App = () => {
  useEffect(() => {
    const setupContract = async () => {
      const contract = await initializeContract();
      if (!contract) {
        console.error("No se pudo inicializar el contrato.");
        return;
      }
      // Ahora puedes trabajar con el contrato
      console.log("Contrato inicializado y listo para interactuar.");
    };

    setupContract();
  }, []);

  return (
    <div className="App">
      <h1>Mi DApp</h1>
    </div>
  );
};

export default App;
