import '../App.scss'
import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { productsData } from '../Products';
import Gallery from '../../../components/Gallery/Gallery';
import { removeAccents } from '../../../utils/utils';

// import catalogFile from "../../../../products/Geral-Euroestante.pdf"
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';// Create styles


export default function Pcategory() {
    const [currentCategory, setCurrentCategory] = useState({});
    const [finalCategory, setFinalCategory] = useState([]);
    const [category, setCategory] = useState([]);

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

    const navigate = useNavigate();

    useEffect(()=>{
        const category = `${location.pathname.split('/')[3] || ""}`
        const final_category = `${location.pathname.split('/')[4] || ""}`

        setCategory(category)
        setFinalCategory(final_category);

        for(let pCategory of productsData.categories){
            if(final_category === ""){
                if(category === removeAccents(pCategory.label.replace(/\s+/g, '-').toLowerCase()))
                setCurrentCategory(pCategory)
                
            }else{
                for(let pcategory of pCategory.categories){
                    if(final_category === removeAccents(pcategory.label.replace(/\s+/g, '-').toLowerCase()))
                    setCurrentCategory(pcategory)
                }
            }
        }
    },[navigate])

  return (
    <div className='Products'>
        <section className="breadcrumbs">
            <Link to="/app/home">Início</Link>
            <span>{`>`}</span>
            <Link to="/app/produtos">produtos</Link>

            {finalCategory === "" ? 
                <>
                    <span>{`>`}</span>
                    <span>{`${category}`}</span>
                </>
                :
                <>
                    <span>{`>`}</span>
                    <Link to={`/app/produtos/${category}`}>{category}</Link>
                    <span>{`>`}</span>
                    <span>{`${finalCategory}`}</span>
                </>
            }
        </section>

        <h2>{category !== finalCategory ? 
            `${category}` : ""} {finalCategory}
        </h2>
        
        {finalCategory !== "" &&
            <section>
                <h3>Catalogos</h3>
              
                {/* <section className='pdfViewer'>
                    <nav>
                        <button onClick={goToPrevPage}>Prev</button>
                        <button onClick={goToNextPage}>Next</button>
                        <p>
                            Page {pageNumber} of {numPages}
                        </p>
                    </nav>
                    <Document file={catalogFile}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                </section> */}
            </section>
        }
        {currentCategory.categories &&
            <Gallery data={currentCategory.categories}/>
        }
        {currentCategory.products &&
            <Gallery data={currentCategory.products}/>
        }
    </div>
  )
}
