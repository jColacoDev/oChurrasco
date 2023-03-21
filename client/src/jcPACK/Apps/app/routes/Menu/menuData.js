
const wineTypes = [
    {
        type: "1",
        label: "da Casa"
    },
    {
        type: "2",
        label: "Douro"
    },
    {
        type: "3",
        label: "Alentejo"
    },
    {
        type: "4",
        label: "Dão"
    },
    {
        type: "5",
        label: "Verdes"
    },
    {
        type: "6",
        label: "Terras do Sado"
    },
    {
        type: "7",
        label: "Rosés"
    },
    {
        type: "8",
        label: "Espumantes"
    },
]

const wineArticles= [
    {
        id: "1",
        family: "menu",
        type: "1",
        label:"Jarro 1L (Branco e tinto)",
        notes:"",
        price: "12.00"  
    },
    {
        id: "2",
        family: "menu",
        type: "1",
        label:"Sangria 1L (Branca e tinta)",
        notes:"",
        price: "12.00"  
    },
    {
        id: "3",
        family: "menu",
        type: "2",
        label:"Esteva 0,75 L",
        notes:"",
        price: "12.00"  
    },
    {
        id: "4",
        family: "menu",
        type: "2",
        label:"Esteva 0,375 L",
        notes:"",
        price: "12.00"  
    },
    {
        id: "5",
        family: "menu",
        type: "2",
        label:"Castelo D'Alba",
        notes:"",
        price: "12.00"  
    },
    {
        id: "6",
        family: "menu",
        type: "2",
        label:"Quinda da Leda (Casa Ferreirinha)",
        notes:"",
        price: "12.00"  
    },
    {
        id: "7",
        family: "menu",
        type: "2",
        label:"Duas Quintas (Ramos Pinto)",
        notes:"",
        price: "12.00"  
    },
    {
        id: "8",
        family: "menu",
        type: "2",
        label:"Crasto",
        notes:"",
        price: "12.00"  
    },
    {
        id: "9",
        family: "menu",
        type: "2",
        label:"Planalto",
        notes:"",
        price: "12.00"  
    },
    {
        id: "10",
        family: "menu",
        type: "3",
        label:"Adega de Borba",
        notes:"",
        price: "12.00"  
    },
    {
        id: "11",
        family: "menu",
        type: "3",
        label:"Defesa",
        notes:"",
        price: "12.00"  
    },
    {
        id: "12",
        family: "menu",
        type: "3",
        label:"Esporão (Reserva)",
        notes:"",
        price: "12.00"  
    },
    {
        id: "13",
        family: "menu",
        type: "3",
        label:"Monte dos Pelados",
        notes:"",
        price: "12.00"  
    },
    {
        id: "14",
        family: "menu",
        type: "3",
        label:"Solar dos Lobos",
        notes:"",
        price: "12.00"  
    },
    {
        id: "15",
        family: "menu",
        type: "3",
        label:"Monte Velho",
        notes:"",
        price: "12.00"  
    },
    {
        id: "16",
        family: "menu",
        type: "3",
        label:"Dom Rafael (Herdade do Mouchão)",
        notes:"",
        price: "12.00"  
    },
    {
        id: "17",
        family: "menu",
        type: "4",
        label:"Duque de Viseu",
        notes:"",
        price: "12.00"  
    },
    {
        id: "18",
        family: "menu",
        type: "4",
        label:"Grão Vasco Dão",
        notes:"",
        price: "12.00"  
    },
    {
        id: "19",
        family: "menu",
        type: "5",
        label:"Casal Garcia",
        notes:"",
        price: "12.00"  
    },
    {
        id: "21",
        family: "menu",
        type: "5",
        label:"Gazela 0,75 L",
        notes:"",
        price: "12.00"  
    },
    {
        id: "22",
        family: "menu",
        type: "5",
        label:"Gazela 0,375 L",
        notes:"",
        price: "12.00"  
    },
    {
        id: "23",
        family: "menu",
        type: "5",
        label:"Muralhas",
        notes:"",
        price: "12.00"  
    },
    {
        id: "24",
        family: "menu",
        type: "5",
        label:"Ponte Lima",
        notes:"",
        price: "12.00"  
    },
    {
        id: "25",
        family: "menu",
        type: "5",
        label:"Quinta de Aveleda",
        notes:"",
        price: "12.00"  
    },
    {
        id: "26",
        family: "menu",
        type: "5",
        label:"Quinta da Lixa",
        notes:"",
        price: "12.00"  
    },
    {
        id: "27",
        family: "menu",
        type: "6",
        label:"D. Ermelinda",
        notes:"",
        price: "12.00"  
    },
    {
        id: "28",
        family: "menu",
        type: "6",
        label:"JP",
        notes:"",
        price: "12.00"  
    },
    {
        id: "29",
        family: "menu",
        type: "6",
        label:"Periquita",
        notes:"",
        price: "12.00"  
    },
    {
        id: "30",
        family: "menu",
        type: "6",
        label:"Quinta de Camarate",
        notes:"",
        price: "12.00"  
    },
    {
        id: "31",
        family: "menu",
        type: "6",
        label:"Terras do Pó",
        notes:"",
        price: "12.00"  
    },
    {
        id: "32",
        family: "menu",
        type: "6",
        label:"NSE",
        notes:"",
        price: "12.00"  
    },
    {
        id: "33",
        family: "menu",
        type: "7",
        label:"Casal Mendes",
        notes:"",
        price: "12.00"  
    },
    {
        id: "34",
        family: "menu",
        type: "7",
        label:"Mateus Rosé",
        notes:"",
        price: "12.00"  
    },
    {
        id: "35",
        family: "menu",
        type: "7",
        label:"Periquita",
        notes:"",
        price: "12.00"  
    },
    {
        id: "36",
        family: "menu",
        type: "8",
        label:"Asti",
        notes:"",
        price: "12.00"  
    },
    {
        id: "37",
        family: "menu",
        type: "8",
        label:"Fita Azul",
        notes:"",
        price: "12.00"  
    },
    {
        id: "38",
        family: "menu",
        type: "8",
        label:"Valmarone",
        notes:"",
        price: "12.00"  
    },
]
const beveragesTypes = [
    {
        type: "1",
        label: "Refrigerantes"
    },
    {
        type: "2",
        label: "Alcool"
    },
    {
        type: "3",
        label: ""
    },
]

const beveragesArticles= [
    {
        id: "101",
        family: "menu",
        type: "1",
        label:"Coca-Cola",
        notes:"",
        price: "12.00"  
    },
    {
        id: "102",
        family: "menu",
        type: "1",
        label:"Coca-Cola zero",
        notes:"",
        price: "12.00"  
    },
    {
        id: "103",
        family: "menu",
        type: "1",
        label:"Sprite",
        notes:"",
        price: "12.00"  
    },
    {
        id: "104",
        family: "menu",
        type: "1",
        label:"Sprite zero",
        notes:"",
        price: "12.00"  
    },
    {
        id: "105",
        family: "menu",
        type: "1",
        label:"Fanta laranja",
        notes:"",
        price: "12.00"  
    },
    {
        id: "106",
        family: "menu",
        type: "1",
        label:"Fanta laranja zero",
        notes:"",
        price: "12.00"  
    },
    {
        id: "107",
        family: "menu",
        type: "1",
        label:"Água Tónica",
        notes:"",
        price: "12.00"  
    },
    {
        id: "108",
        family: "menu",
        type: "2",
        label:"fino de cerveja",
        notes:"",
        price: "12.00"  
    },
    {
        id: "109",
        family: "menu",
        type: "2",
        label:"caneca de cerveja",
        notes:"",
        price: "12.00"  
    },
    {
        id: "110",
        family: "menu",
        type: "2",
        label:"Copo de vinho",
        notes:"",
        price: "12.00"  
    }
]

const dessertTypes = [
    {
        type: "1",
        label: "Doces"
    },
    {
        type: "2",
        label: "Frutas"
    },
    {
        type: "3",
        label: "da Casa"
    },
]

const dessertArticles= [
    {
        id: "201",
        family: "menu",
        type: "1",
        label:"Pudim Flan",
        notes:"",
        price: "12.00"  
    },
    {
        id: "202",
        family: "menu",
        type: "1",
        label:"Mousse de Chocolate",
        notes:"",
        price: "12.00"  
    },
    {
        id: "203",
        family: "menu",
        type: "3",
        label:"Tachinho da casa",
        notes:"",
        price: "12.00"  
    },
    {
        id: "203",
        family: "menu",
        type: "1",
        label:"Torta de Laranja",
        notes:"",
        price: "12.00"  
    },
    {
        id: "204",
        family: "menu",
        type: "1",
        label:"",
        notes:"",
        price: "12.00"  
    },
    {
        id: "205",
        family: "menu",
        type: "1",
        label:"Toucinho do céu",
        notes:"",
        price: "12.00"  
    },
    {
        id: "206",
        family: "menu",
        type: "1",
        label:"Trocha de ovos",
        notes:"",
        price: "12.00"  
    },
    {
        id: "207",
        family: "menu",
        type: "2",
        label:"Maçã assada",
        notes:"",
        price: "12.00"  
    },
    {
        id: "208",
        family: "menu",
        type: "2",
        label:"Salada de frutas",
        notes:"",
        price: "12.00"  
    },
    {
        id: "209",
        family: "menu",
        type: "3",
        label:"Pudim Flan (Mestre Chico)",
        notes:"",
        price: "12.00"  
    },
    {
        id: "210",
        family: "menu",
        type: "1",
        label:"",
        notes:"",
        price: "12.00"  
    },
]
const mainTypes = [
    {
        type: "1",
        label: "Especialidade na brasa"
    },
    {
        type: "2",
        label: "Frutos do mar"
    },
    {
        type: "4",
        label: "Entradas e saladas"
    },
    {
        type: "3",
        label: "Carnes da cozinha"
    },
    {
        type: "5",
        label: "Guarnições extra"
    },
]
const mainArticles= [
    {
        id: "301",
        family: "menu",
        type: "1",
        label:"Espetada de carnes",
        notes:"Espetada de carnes com legumes e arroz branco",
        price: "12.00"  
    },
    {
        id: "302",
        family: "menu",
        type: "1",
        label:"Entrecôte de vaca (costela)",
        notes:"Entrecôte de vaca grelhado com batata frita e salada",
        price: "25.50"  
    },
    {
        id: "303",
        family: "menu",
        type: "1",
        label:"Costeletas de borrego",
        notes:"Costeletas de borrego com molho de hortelã, legumes e batata gratinada",
        price: "14.50"  
    },
    {
        id: "304",
        family: "menu",
        type: "1",
        label:"Medalhões de porco c/ bacon",
        notes:"Medalhões de porco com bacon, cogumelos, puré de batata e legumes",
        price: "13.00"  
    },
    {
        id: "305",
        family: "menu",
        type: "1",
        label:"Entrecosto Marinado",
        notes:"Entrecosto marinado com batata frita, arroz e salada",
        price: "9.50"  
    },
    {
        id: "306",
        family: "menu",
        type: "1",
        label:"Lombo de Vaca",
        notes:"Lombo de vaca grelhado com molho de pimenta verde, batata frita e salada",
        price: "22.00"  
    },
    {
        id: "307",
        family: "menu",
        type: "1",
        label:"Rump Steak (Vazia)",
        notes:"Rump steak grelhado com batata frita e legumes",
        price: "13.00"  
    },
    {
        id: "308",
        family: "menu",
        type: "1",
        label:"Lombinho de Porco",
        notes:"Lombinho de porco grelhado com molho de cogumelos, arroz e legumes",
        price: "13.00"  
    },
    {
        id: "309",
        family: "menu",
        type: "1",
        label:"Churrasco de Coelho",
        notes:"Churrasco de coelho com batata frita, arroz e salada",
        price: "13.00"  
    },
    {
        id: "310",
        family: "menu",
        type: "1",
        label:"1/2 Frango no Espeto",
        notes:"Meio frango no espeto com batata frita e salada",
        price: "13.00"  
    },
    {
        id: "311",
        family: "menu",
        type: "1",
        label:"Frango no Espeto",
        notes:"Frango inteiro no espeto com batata frita e salada",
        price: "13.00"  
    },
    {
        id: "312",
        family: "menu",
        type: "2",
        label:"Polvo Lagareiro",
        notes:"Polvo grelhado com azeite, alho e batata a murro",
        price: "13.00"  
    },
    
    {
        id: "313",
        family: "menu",
        type: "3",
        label:"Carne de Porco Alentejana",
        notes:"",
        price: "13.00"  
    },
    {
        id: "314",
        family: "menu",
        type: "2",
        label:"Gambas Grelhadas ou Cozidas (Kg)",
        notes:"Deliciosas gambas grelhadas ou cozidas com ingredientes selecionados, apresentadas em porções de 1kg.",
        price: "13.00"
    },
    {
        id: "315",
        family: "menu",
        type: "2",
        label:"Camaräo Tigre Grelhado (Kg)",
        notes:"Camarão Tigre Grelhado com temperos especiais, servido em porções de 1kg.",
        price: "13.00"
    },
    {
        id: "316",
        family: "menu",
        type: "2",
        label:"Lulas na Grelha",
        notes:"Lulas frescas grelhadas com um toque de alho e ervas, perfeitas para um jantar especial.",
        price: "13.00"
    },
    {
        id: "317",
        family: "menu",
        type: "2",
        label:"Salmäo Grelhado",
        notes:"Salmão fresco grelhado com legumes crocantes e temperos especiais, servido com molho de limão.",
        price: "13.00"
    },
    {
        id: "318",
        family: "menu",
        type: "2",
        label:"Lulas e Gambas c/Bacon Plancha",
        notes:"Uma combinação deliciosa de lulas, gambas e bacon, perfeitamente grelhados e temperados, apresentados em porções generosas.",
        price: "13.00"
    },
    {
        id: "319",
        family: "menu",
        type: "2",
        label:"Bacalhau Moda de Viana",
        notes:"Bacalhau de alta qualidade cozido com batatas, cebolas e pimentos, temperado com azeite e servido com azeitonas e ovos cozidos.",
        price: "13.00"
    },
    {
        id: "320",
        family: "menu",
        type: "3",
        label:"O Nosso Bife Especial",
        notes:"Um bife suculento e saboroso, grelhado na perfeição e servido com batatas fritas e legumes frescos da época.",
        price: "13.00"
    },
    {
        id: "321",
        family: "menu",
        type: "3",
        label:"Strogonoff de Vaca",
        notes:"Carne de vaca tenra e suculenta cozida em molho de creme de leite com cogumelos e servida com arroz e batata palha.",
        price: "13.00"
    },
    {
        id: "322",
        family: "menu",
        type: "3",
        label:"Caril de Frango Indiana",
        notes:"Frango macio cozido em molho de caril aromático com legumes frescos, servido com arroz basmati.",
        price: "13.00"
    },
    {
        id: "323",
        family: "menu",
        type: "3",
        label: "Escalopes de Vaca ao Madeira",
        notes: "Deliciosos escalopes de vaca acompanhados com um molho de vinho Madeira e cogumelos frescos.",
        price: "13.00"
    },
    {
        id: "324",
        family: "menu",
        type: "4",
        label: "Salada Primavera",
        notes: "Uma deliciosa salada fresca com alface, tomate, cenoura, pepino e vinagrete.",
        price: "13.00"
    },
    {
        id: "325",
        family: "menu",
        type: "4",
        label: "Cocktail de Gambas",
        notes: "Camarão cozido, servido com um molho rosa e guarnecido com alface, tomate e limão.",
        price: "13.00"
    },
    {
        id: "326",
        family: "menu",
        type: "4",
        label: "Sopa de Gambas",
        notes: "Uma sopa rica e cremosa de gambas, com um toque de coentros.",
        price: "13.00"
    },
    {
        id: "327",
        family: "menu",
        type: "4",
        label: "Cogumelos Frescos Salt. c/Presunto",
        notes: "Cogumelos frescos salteados com alho e presunto, temperados com ervas aromáticas.",
        price: "13.00"
    },
    {
        id: "328",
        family: "menu",
        type: "4",
        label: "Salada Especial",
        notes: "Uma salada com ingredientes frescos e variados, como alface, rúcula, tomate seco, queijo feta, nozes e vinagrete balsâmico.",
        price: "13.00"
    },
    {
        id: "329",
        family: "menu",
        type: "4",
        label: "Espargos frios c/ Mayonaise",
        notes: "Espargos frescos cozidos, servidos com maionese caseira e um toque de limão.",
        price: "13.00"
    },
    {
        id: "330",
        family: "menu",
        type: "4",
        label: "Ameijoas Bulhão Pato",
        notes: "Ameijoas frescas cozidas em um molho de alho e coentros.",
        price: "13.00"
    },
    {
        id: "331",
        family: "menu",
        type: "4",
        label: "Gambas al Ajillo",
        notes: "Camarão salteado com alho e azeite, temperado com pimentão e um toque de limão.",
        price: "13.00"
    },
    {
        id: "332",
        family: "menu",
        type: "4",
        label: "Salmäo Fumado Aromatizado",
        notes: "Salmão fumado com um toque de ervas aromáticas, servido com torradas de pão integral.",
        price: "13.00"
    },
    {
        id: "333",
        family: "menu",
        type: "4",
        label: "Presunto Serrano",
        notes: "Delicioso presunto serrano fatiado, acompanhado com pão e azeitonas.",
        price: "13.00"
    },
    {
        id: "334",
        family: "menu",
        type: "5",
        label:"Esparregado",
        notes:"Feito com espinafres, azeite e alho",
        price: "13.00"
    },
    {
        id: "335",
        family: "menu",
        type: "5",
        label:"Batatas Fritas",
        notes:"Batatas cortadas em palitos finos e fritas até ficarem douradas",
        price: "13.00"
    },
    {
        id: "336",
        family: "menu",
        type: "5",
        label:"Grelos Salteados",
        notes:"Grelos salteados em azeite e alho",
        price: "13.00"
    }
]

export const menuSelection = [
    {
        type: "0",
        label: "Main dishes",
        types: mainTypes,
        articles: mainArticles
    },
    {
        type: "1",
        label: "Desserts",
        types: dessertTypes,
        articles: dessertArticles
    },
    {
        type: "2",
        label: "Beverages",
        types: beveragesTypes,
        articles: beveragesArticles
    },
    {
        type: "3",
        label: "Wines",
        types: wineTypes,
        articles: wineArticles
    },
]
