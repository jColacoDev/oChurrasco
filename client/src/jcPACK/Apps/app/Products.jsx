import { products_data } from '../../../products_data/Products_data'

const {
    armarios,
    mobiliario,
    mesas,
    maples,
    estantes,
    complementos,
    biombos,
    cadeiras
} = products_data;

export const productsData = {
    ref: "produtos",
    label: "Produtos",
    image: "",
    products: [],
    catalogs: [],
    categories:[
        {
            ref: "mobiliario",
            label: "Mobiliário",
            image: mobiliario?.products[0]?.image,
            products: mobiliario.products,
            catalogs: mobiliario.catalogs,
            categories: [
                {
                    ref: "recepcao",
                    label: "Recepção",
                    image: mobiliario.recepcao?.products[0]?.image,
                    products: mobiliario.recepcao.products,
                    catalogs: mobiliario.recepcao.catalogs,
                    categories: []
                },
                {
                    ref: "gabinetes",
                    label: "Gabinetes",
                    image: mobiliario.gabinete?.products[0]?.image,
                    products: mobiliario.gabinete.products,
                    catalogs: mobiliario.gabinete.catalogs,
                    categories: []
                },
                {
                    ref: "openspace",
                    label: "Openspace",
                    image: mobiliario.openspace?.products[0]?.image,
                    products: mobiliario.openspace.products,
                    catalogs: mobiliario.openspace.catalogs,
                    categories: []
                },
                {
                    ref: "escolar",
                    label: "Escolar",
                    image: mobiliario.escolar?.products[0]?.image,
                    products: mobiliario.escolar.products,
                    catalogs: mobiliario.escolar.catalogs,
                    categories: []
                },
                {
                    ref: "call-center",
                    label: "Call-center",
                    image: mobiliario.callcenter?.products[0]?.image,
                    products: mobiliario.callcenter.products,
                    catalogs: mobiliario.callcenter.catalogs,
                    categories: []
                },
                {
                    ref: "hotelaria",
                    label: "Hotelaria",
                    image: mobiliario.hotelaria?.products[0]?.image,
                    products: mobiliario.hotelaria.products,
                    catalogs: mobiliario.hotelaria.catalogs,
                    categories: []
                },
            ]
        },
        {
            ref: "mesas-de-reuniao",
            label: "Mesas de Reunião",
            image: mesas?.products[0]?.image,
            products: mesas.products,
            catalogs: mesas.catalogs,
            categories: []
        },
        {
            ref: "cadeiras",
            label: "Cadeiras",
            image: cadeiras?.products[0]?.image,
            products: cadeiras.products,
            catalogs: cadeiras.catalogs,
            categories: [
                {
                    ref: "direccao",
                    label: "Direcção",
                    image: cadeiras.direccao?.products[0]?.image,
                    products: cadeiras.direccao.products,
                    catalogs: cadeiras.direccao.catalogs,
                    categories: []
                },
                {
                    ref: "operativas",
                    label: "Operativas",
                    image: cadeiras.operativa?.products[0]?.image,
                    products: cadeiras.operativa.products,
                    catalogs: cadeiras.operativa.catalogs,
                    categories: []
                },
                {
                    ref: "fixas",
                    label: "Fixas",
                    image: cadeiras.fixa?.products[0]?.image,
                    products: cadeiras.fixa.products,
                    catalogs: cadeiras.fixa.catalogs,
                    categories: []
                },
                {
                    ref: "bancadas",
                    label: "Bancadas",
                    image: cadeiras.bancada?.products[0]?.image,
                    products: cadeiras.bancada.products,
                    catalogs: cadeiras.bancada.catalogs,
                    categories: []
                },
                {
                    ref: "auditorio",
                    label: "Auditório",
                    image: cadeiras.auditorio?.products[0]?.image,
                    products: cadeiras.auditorio.products,
                    catalogs: cadeiras.auditorio.catalogs,
                    categories: []
                },
            ]
        },
        {
            ref: "maples-e-sofas",
            label: "Maples e sofás",
            image: maples?.products[0]?.image,
            products: maples.products,
            catalogs: maples.catalogs,
            categories: []
        },
        {
            ref: "armarios-e-cacifos",
            label: "Armários e cacifos",
            image: armarios?.products[0]?.image,
            products: armarios.products,
            catalogs: armarios.catalogs,
            categories: []
        },
        {
            ref: "estantes",
            label: "Estantes",
            image: estantes?.products[0]?.image,
            products: estantes.products,
            catalogs: estantes.catalogs,
            categories: []
        },
        {
            ref: "biombos-e-divisorias",
            label: "Biombos e divisórias",
            image: biombos?.products[0]?.image,
            products: biombos.products,
            catalogs: biombos.catalogs,
            categories: []
        },
        {
            ref: "complementos",
            label: "Complementos",
            image: complementos?.products[0]?.image,
            products: complementos.products,
            catalogs: complementos.catalogs,
            categories: []
        },
    ]
}