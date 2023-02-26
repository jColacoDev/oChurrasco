import './PdfView.scss'
import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import { pdfjs } from 'react-pdf/dist/esm/entry.vite';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfView({
    file, 
    controls=false,
    linkPdf=false
}) {
    const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);
        
  return (file &&
    <div className='PdfView'>
        {controls &&
            <nav>
                <button onClick={goToPrevPage}>Prev</button>
                <button onClick={goToNextPage}>Next</button>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </nav>
        }
        <div style={{cursor: linkPdf ? "pointer" : "default"}} 
            onClick={()=>linkPdf && window.open(file, '_blank')}
        >
            <Document 
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                >
                <Page pageNumber={pageNumber} />
            </Document>
        </div>
    </div>
  )
}
