import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import goodvibrationsFont from "./fonts/goodvibrations-script.ttf";
import colus from "./fonts/Colus-Regular.ttf";

// Registra uma nova fonta para o PDF
Font.register({
  family: "GoodVibrations",
  src: goodvibrationsFont,
});
Font.register({
  family: "Colus",
  src: colus,
});

// Define o estilo para o componente raiz
const styles = StyleSheet.create({
  // Estilo da pagina do PDF
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  // Estilo da imagem de fundo do PDF
  backgroundLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  // Estilo da div das informações do curso no PDF
  contentLayer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  // Estilo da imagem do curso no PDF
  contentLayerLogo: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 70,
    maxWidth: 200, //define a largura maxima que a imagem pode conter para não quebrar o design
    maxHeight: 70, //define o tamanho maximo que a imagem pode conter para não quebrar o design
    top: 80,
    left: 220,
    backgroundColor: "",
  },
  // Estilo da nome do aluno do PDF
  divName: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 230,
    marginBottom: 12,
    backgroundColor: "",
    width: 450,
    height: 70,
    maxWidth: 450,
    maxHeight: 70,
  },
  // Estilo 1 do texto das informações do PDF
  textName: {
    fontFamily: "GoodVibrations", // Define a fonte personalizada
    fontSize: 36,
    fontWeight: "bold",
    color: "#25364B",
  },
  // Estilo 2 do texto das informações do PDF
  textInfoH1: {
    fontFamily: "Colus",
    fontSize: 12,
    fontWeight: "normal",
    marginTop: 1, // Adiciona uma margem superior de 1 ponto
    color: "#25364B",
  },
  // Estilo 3 do texto das informações do PDF
  spacing: {
    fontFamily: "Colus",
    fontSize: 12,
    fontWeight: "normal",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    color: "#25364B",
  },
  // Estilo imagem de assinatura do PDF
  signature: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    left: 100,
    marginTop: 10,
    width: 110,
    height: 50,
    maxWidth: 110,
    maxHeight: 50,
    backgroundColor: "",
  },
  // Estilo 4 do texto das informações do PDF
  signatureTextName: {
    marginTop: 5,
    left: 100,
    fontSize: 9,
    fontFamily: "Colus",
    color: "#25364B",
  },
  // Estilo 5 do texto das informações do PDF
  signatureTextCategory: {
    top: -1,
    left: 100,
    fontSize: 8,
    fontFamily: "Colus",
    color: "#25364B",
  },
});

// Dados que serão fornecidos para o PDF
interface MyDocumentProps {
  data: {
    nomeAluno: string;
    curso: string;
    coordenador: string;
    cargaHoraria: string;
    imagemFundo: string;
    imagemLogo: string;
    assinatura: string;
    responsavel: string;
  };
}

// Componente PDF com os dados inseriodos
const MyDocument = ({ data }: MyDocumentProps) => (
  <>
    <Document>
      {/*folha do pdf no formato A4 e modo paisagem (landscape)*/}
      <Page size="A4" orientation="landscape" style={styles.page}>
        {/*view = div*/}
        <View style={styles.backgroundLayer}>
          <Image
            src={data.imagemFundo}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.contentLayerLogo}>
          <Image
            src={data.imagemLogo}
            style={{ width: "50%", height: "50%" }}
          />
        </View>
        <View style={styles.divName}>
          <Text style={styles.textName}>{data.nomeAluno}</Text>
        </View>
        <View style={styles.contentLayer}>
          <Text style={styles.textInfoH1}>
            Concluiu o curso de {data.curso}
          </Text>
          <Text style={styles.textInfoH1}>
            Coordenado por {data.coordenador}
          </Text>
          <Text style={styles.textInfoH1}>
            Com carga horária de {data.cargaHoraria} hora(s).
          </Text>
          <Text style={styles.spacing}>Portaria sa IES MEC 177/2000</Text>
          <View style={styles.signature}>
            <Image
              src={data.assinatura}
              style={{ width: "50%", height: "50%" }}
            />
          </View>
          <Text style={styles.signatureTextName}>{data.responsavel}</Text>
          <Text style={styles.signatureTextCategory}>
            Responsável acadêmico
          </Text>
        </View>
      </Page>
    </Document>
  </>
);

export default MyDocument;
