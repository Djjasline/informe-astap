
import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const App = () => {

const generatePDF = async () => {
  const element = formRef.current;
  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const imgProps = pdf.getImageProperties(imgData);
  const imgRatio = imgProps.width / imgProps.height;
  const pdfWidth = pageWidth;
  const pdfHeight = pageWidth / imgRatio;

  let position = 0;
  if (pdfHeight < pageHeight) {
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
  } else {
    let remainingHeight = pdfHeight;
    let page = 0;
    while (remainingHeight > 0) {
      const sourceY = page * pageHeight * imgProps.height / pdfHeight;
      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = imgProps.width;
      pageCanvas.height = imgProps.height * pageHeight / pdfHeight;
      const ctx = pageCanvas.getContext('2d');
      ctx.drawImage(canvas, 0, sourceY, imgProps.width, pageCanvas.height, 0, 0, imgProps.width, pageCanvas.height);
      const pageData = pageCanvas.toDataURL('image/png');
      if (page > 0) pdf.addPage();
      pdf.addImage(pageData, 'PNG', 0, 0, pageWidth, pageHeight);
      remainingHeight -= pageHeight;
      page++;
    }
  }

  const fileName = `Informe_ASTAP_${new Date().toISOString().split('T')[0]}.pdf`;
  pdf.save(fileName);

  const blob = pdf.output('blob');
  const url = URL.createObjectURL(blob);
  setPdfURL(url);
  setPdfList([...pdfList, { nombre: fileName, url }]);
};


<div ref={formRef} className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-md text-sm">
  <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">INFORME DE TRABAJO Ú SERVICIO</h1>
  ...
</div>

}

export default App;
