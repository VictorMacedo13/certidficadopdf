import React from "react";
import MyDocument from "./MyDocument";
import { pdf } from "@react-pdf/renderer";
import "./App.css";

// dados preenchidos para o PDF
const data = {
  nomeAluno: "Victor Fernando Viana de Macedo",
  curso: "React com Typescript",
  coordenador: "José Moura Soares",
  cargaHoraria: "500",
  imagemPadrao:"https://media.discordapp.net/attachments/723159987567722576/1124061821918253156/CertificadoModelounifastBG23_2.png?width=956&height=676",
  imagemFundo:
    "https://cdn.discordapp.com/attachments/723159987567722576/1124058451115524157/Certificado-Modelo_unifast-BG1_2.png",
  imagemLogo:
    "https://b82cc7cc3f8c33e79db00028aaa45fd0.cdn.bubble.io/f1685392330908x406047499559267600/WhatsApp%20Image%202023-05-29%20at%2017.07.03.jpeg",
  assinaturaResponsavel:
    "https://b82cc7cc3f8c33e79db00028aaa45fd0.cdn.bubble.io/f1685392330908x406047499559267600/WhatsApp%20Image%202023-05-29%20at%2017.07.03.jpeg",
  responsavel: "Veronica Dantas",
  assinaturaDiretor:"https://b82cc7cc3f8c33e79db00028aaa45fd0.cdn.bubble.io/f1685392330908x406047499559267600/WhatsApp%20Image%202023-05-29%20at%2017.07.03.jpeg",
  diretor:"Armando Moury Fernandes",
  cpf:"888.888.888-88",
  periodoIni:"XX/XX/XXXX",
  periodoFim:"XX/XX/XXXX",
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
