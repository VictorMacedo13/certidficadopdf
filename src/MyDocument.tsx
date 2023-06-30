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
    justifyContent:"center",
    marginBottom: "10px"
  },
  contentLayerSignature: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    marginBottom: "10px",
    width:130,
  },
  contentLayerPortaria: {
    position: "absolute",
    flex: 1,
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
    bottom:0
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
    top: -150,
    left: -240,
    backgroundColor: "",
  },
  // Estilo da nome do aluno do PDF

  // Estilo 1 do texto das informações do PDF
  textName: {
    
    fontSize: 26,
    fontWeight: "bold",
    color: "#25364B",
    marginBottom:15,
    marginTop:10,
  },
  divcolumn:{
    display: "flex",
    flexDirection: "column",
    position:"absolute",
    left: 110,
    top: 205
  },
  divRight:{
    display: "flex",
    flexDirection: "column",
    position:"absolute",
    justifyContent:"center",
    alignItems:"center",
    width:130,
    right: 115,
    top: 200,
   
    
  },
  maxHeightQRCode:{
    maxHeight:"70px",
    maxWidth: "70px",
    marginBottom: "10px"
    
  },

  textPadrao:{
    fontSize: 12,
    maxWidth: "280px",
    wordBreak: "break-word",
    lineHeight: "1.8"

  },
  text:{
    fontSize: 12,
    lineHeight: "1.8"
  },
  textCertificado: {
    fontSize: 36,
    color: "#25364B",
    marginBottom: 25
  },


  // Estilo imagem de assinatura do PDF
  signature: {
    display: "flex",
    botton:0,
    alignItems: "center",
    justifyContent: "flex-end",

    width: 110,
    height: 50,
    maxWidth: 110,
    maxHeight: 50,
    
  },
  // Estilo 4 do texto das informações do PDF
  signatureTextName: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    // width: 130,
    fontSize: 10,
    maxWidth: 130,
    color: "#25364B",
  },
  // Estilo 5 do texto das informações do PDF
  signatureTextCategory: {
    
    fontSize: 9,
    
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
    imagemPadrao: string;
    imagemFundo: string;
    imagemLogo: string;
    assinaturaResponsavel: string;
    responsavel: string;
    assinaturaDiretor: string;
    diretor: string;
    cpf: string;
    periodoIni: string;
    periodoFim: string;
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
        <View style={styles.backgroundLayer}>
          <Image
            src={data.imagemPadrao}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.contentLayerLogo}>
          <Image
            src={data.imagemLogo}
            style={{ width: "70%", height: "70%" }}
          />
        </View>
        <View style={styles.divcolumn}>
          <Text style={styles.textCertificado}>CERTIFICADO</Text>
          <Text style={styles.textPadrao}>A faculdade Selesiano do Nordeste, Credenciada pela portaria n.º 888 de 88/88/8888, certifica que</Text>
          <Text style={styles.textName}>{data.nomeAluno}</Text>
          <Text style={styles.textPadrao}>CPF n.º [{data.cpf}], Concluiu o curso de</Text>
          <Text style={styles.textName}>{data.curso}</Text>
          <Text style={styles.textPadrao}> Coordenado por {data.coordenador}</Text>
          <Text style={styles.text}> com {data.cargaHoraria} horas totais, no periodo de [{data.periodoIni}] a [{data.periodoFim}]</Text>
        </View>
        <View style={styles.divRight}>
          <Image
            src={data.imagemLogo}
            style={styles.maxHeightQRCode}
          />
            <View style={styles.contentLayer}>
            <View style={styles.signature}>
              <Image
                src={data.assinaturaDiretor}
                
              />
            </View>
            <Text style={styles.signatureTextName}>{data.diretor}</Text>
            <Text style={styles.signatureTextCategory}>
              Diretor Geral
            </Text>
          </View>
          <View style={styles.contentLayer}>
            <View style={styles.signature}>
              <Image
                src={data.assinaturaResponsavel}
                
              />
            </View>
            <Text style={styles.signatureTextName}>{data.responsavel}</Text>
            <Text style={styles.signatureTextCategory}>
              Responsável acadêmico
            </Text>
          </View>
        
        </View>
   
        <View style={styles.contentLayerPortaria}>
          
          <Text style={styles.text}>Portaria da IES MEC 177/2000</Text>
        </View>
      </Page>
    </Document>
  </>
);

export default MyDocument;
