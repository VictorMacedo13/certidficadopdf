import React from "react";
import MyDocument from "./MyDocument";
import { pdf } from "@react-pdf/renderer";
import "./app.css";

// dados preenchidos para o PDF
const data = {
  nomeAluno: "Victor Fernando Viana de Macedo",
  curso: "React com Typescript",
  coordenador: "José Moura Soares",
  cargaHoraria: "500",
  imagemFundo:
    "https://b82cc7cc3f8c33e79db00028aaa45fd0.cdn.bubble.io/f1685392330908x406047499559267600/WhatsApp%20Image%202023-05-29%20at%2017.07.03.jpeg",
  imagemLogo:
    "https://b82cc7cc3f8c33e79db00028aaa45fd0.cdn.bubble.io/f1685392330908x406047499559267600/WhatsApp%20Image%202023-05-29%20at%2017.07.03.jpeg",
  assinatura:
    "https://b82cc7cc3f8c33e79db00028aaa45fd0.cdn.bubble.io/f1685392330908x406047499559267600/WhatsApp%20Image%202023-05-29%20at%2017.07.03.jpeg",
  responsavel: "Maria José da Silva",
};

// Gera o PDF
const handleGeneratePDF = async () => {
  const blob = await pdf(<MyDocument data={data} />).toBlob(); // Cria o arquivo (BLOB) a partir do Component do PDF
  const url = URL.createObjectURL(blob); // Gera um url de acesso para o blob
  // let a = document.createElement("a");
  // a.download = "certificado.pdf";
  // a.href = url;
  // a.click();
  window.open(url, "_blank"); // Abre uma aba para visualizar e baixar o pdf
};

function App() {
  return (
    <div className="App">
      <div className="content">
        <button onClick={handleGeneratePDF}>Baixar Certificado</button>
      </div>
    </div>
  );
}

export default App;
