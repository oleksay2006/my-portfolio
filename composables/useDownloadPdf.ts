export default function useDownloadPdf () {
  const downloadPdf = (pdfUrl: string) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = "oleksii-yatsentiuk_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return {
    downloadPdf
  };
}
