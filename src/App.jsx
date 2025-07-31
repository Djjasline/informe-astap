import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function App() {
  const [cliente, setCliente] = useState("");
  const [codigoInterno, setCodigoInterno] = useState("");
  const [fechaServicio, setFechaServicio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [referencia, setReferencia] = useState("");
  const [personalTecnico, setPersonalTecnico] = useState("");
  const [tecnicoApoyo, setTecnicoApoyo] = useState("");
  const [actividades, setActividades] = useState([{
    descripcion: '',
    evidencia: '',
    imagen: null
  }]);
  const [pdfURL, setPdfURL] = useState(null);
  const [pdfList, setPdfList] = useState([]);

  const firmaAstapRef = useRef(null);
  const firmaClienteRef = useRef(null);
  const formRef = useRef(null);

  const handleActividadImage = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const updated = [...actividades];
      updated[index].imagen = reader.result;
      setActividades(updated);
    };
    reader.readAsDataURL(file);
  };

  const generatePDF = () => {
    alert("Aquí se genera el PDF con html2canvas y jsPDF en la versión final.");
  };

  return (
import React from "react";
import SignatureCanvas from "react-signature-canvas";

export default function FormularioASTAP(props) {
  return (
    <div>
      {/* Tu formulario JSX completo aquí (este archivo se regenerará completo si lo deseas) */}
    </div>
  );
}

  );
}