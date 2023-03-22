const wineTypes = [
    {
        type: "1",
        label: "House Wine"
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
        label: "Rosé Wines"
    },
    {
        type: "8",
        label: "Sparkling Wines"
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
        label: "Soft drinks"
    },
    {
        type: "2",
        label: "Alcohol"
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
    label: "Sweets"
    },
    {
    type: "2",
    label: "Fruits"
    },
    {
    type: "3",
    label: "Homemade"
    },
    ]

const dessertArticles= [
    {
    id: "201",
    family: "menu",
    type: "1",
    label:"Flan Pudding",
    notes:"",
    price: "12.00"
    },
    {
    id: "202",
    family: "menu",
    type: "1",
    label:"Chocolate Mousse",
    notes:"",
    price: "12.00"
    },
    {
    id: "203",
    family: "menu",
    type: "3",
    label:"House Special",
    notes:"",
    price: "12.00"
    },
    {
    id: "203",
    family: "menu",
    type: "1",
    label:"Orange Cake",
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
    label:"Heaven's Bacon",
    notes:"",
    price: "12.00"
    },
    {
    id: "206",
    family: "menu",
    type: "1",
    label:"Egg Trocha",
    notes:"",
    price: "12.00"
    },
    {
    id: "207",
    family: "menu",
    type: "2",
    label:"Baked Apple",
    notes:"",
    price: "12.00"
    },
    {
    id: "208",
    family: "menu",
    type: "2",
    label:"Fruit Salad",
    notes:"",
    price: "12.00"
    },
    {
    id: "209",
    family: "menu",
    type: "3",
    label:"Flan Pudding (Master Chico)",
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
    label: "Grilled specialties"
    },
    {
    type: "2",
    label: "Seafood"
    },
    {
    type: "3",
    label: "Kitchen meats"
    },
    {
    type: "5",
    label: "Extra sides"
    },
    ]
    const mainArticles= [
        {
            id: "301",
            family: "menu",
            type: "1",
            label:"Mixed meat skewers",
            notes:"Mixed meat skewers with vegetables and white rice",
            price: "12.00"  
        },
        {
            id: "302",
            family: "menu",
            type: "1",
            label:"Ribeye steak",
            notes:"Grilled ribeye steak with french fries and salad",
            price: "25.50"  
        },
        {
            id: "303",
            family: "menu",
            type: "1",
            label:"Lamb chops",
            notes:"Lamb chops with mint sauce, vegetables, and gratin potatoes",
            price: "14.50"  
        },
        {
            id: "304",
            family: "menu",
            type: "1",
            label:"Pork medallions with bacon",
            notes:"Pork medallions with bacon, mushrooms, mashed potatoes, and vegetables",
            price: "13.00"  
        },
        {
            id: "305",
            family: "menu",
            type: "1",
            label:"Marinated pork ribs",
            notes:"Marinated pork ribs with french fries, rice, and salad",
            price: "9.50"  
        },
        {
            id: "306",
            family: "menu",
            type: "1",
            label:"Beef tenderloin",
            notes:"Grilled beef tenderloin with green pepper sauce, french fries, and salad",
            price: "22.00"  
        },
        {
            id: "307",
            family: "menu",
            type: "1",
            label:"Rump steak",
            notes:"Grilled rump steak with french fries and vegetables",
            price: "13.00"  
        },
        {
            id: "308",
            family: "menu",
            type: "1",
            label:"Pork loin",
            notes:"Grilled pork loin with mushroom sauce, rice, and vegetables",
            price: "13.00"  
        },
        {
            id: "309",
            family: "menu",
            type: "1",
            label:"Rabbit barbecue",
            notes:"Rabbit barbecue with french fries, rice, and salad",
            price: "13.00"  
        },
        {
            id: "310",
            family: "menu",
            type: "1",
            label:"1/2 Chicken skewers",
            notes:"Half chicken skewers with french fries and salad",
            price: "13.00"  
        },
        {
            id: "311",
            family: "menu",
            type: "1",
            label:"Chicken skewers",
            notes:"Whole chicken skewers with french fries and salad",
            price: "13.00"  
        },
        {
            id: "312",
            family: "menu",
            type: "2",
            label:"Octopus Lagareiro",
            notes:"Grilled octopus with olive oil, garlic, and punched potatoes",
            price: "13.00"  
        },
        {
            id: "313",
            family: "menu",
            type: "3",
            label:"Pork Alentejana",
            notes:"",
            price: "13.00"  
        },
        {
            id: "314",
            family: "menu",
            type: "2",
            label:"Grilled or Boiled Prawns (Kg)",
            notes:"Delicious grilled or boiled prawns with selected ingredients, served in 1kg portions.",
            price: "13.00"
            },
            {
            id: "313",
            family: "menu",
            type: "3",
            label:"Pork Alentejana",
            notes:"",
            price: "13.00"
            },
            {
            id: "315",
            family: "menu",
            type: "2",
            label:"Grilled Tiger Prawns (Kg)",
            notes:"Grilled Tiger Prawns with special seasonings, served in 1kg portions.",
            price: "13.00"
            },
            {
            id: "316",
            family: "menu",
            type: "2",
            label:"Grilled Squid",
            notes:"Fresh grilled squid with a touch of garlic and herbs, perfect for a special dinner.",
            price: "13.00"
            },
            {
            id: "317",
            family: "menu",
            type: "2",
            label:"Grilled Salmon",
            notes:"Fresh grilled salmon with crispy vegetables and special seasonings, served with lemon sauce.",
            price: "13.00"
            },
            {
            id: "318",
            family: "menu",
            type: "2",
            label:"Squid and Prawns with Bacon Plancha",
            notes:"A delicious combination of squid, prawns and bacon, perfectly grilled and seasoned, presented in generous portions.",
            price: "13.00"
            },
            {
            id: "319",
            family: "menu",
            type: "2",
            label:"Viana-style Cod",
            notes:"High-quality cod cooked with potatoes, onions and peppers, seasoned with olive oil and served with olives and boiled eggs.",
            price: "13.00"
            },
            {
            id: "320",
            family: "menu",
            type: "3",
            label:"Our Special Steak",
            notes:"A juicy and tasty steak, grilled to perfection and served with French fries and fresh seasonal vegetables.",
            price: "13.00"
            },
            {
            id: "321",
            family: "menu",
            type: "3",
            label:"Beef Stroganoff",
            notes:"Tender and succulent beef cooked in a cream of mushroom sauce and served with rice and potato straws.",
            price: "13.00"
            },
            {
            id: "322",
            family: "menu",
            type: "3",
            label:"Indian Chicken Curry",
            notes:"Soft chicken cooked in aromatic curry sauce with fresh vegetables, served with basmati rice.",
            price: "13.00"
            },
            {
            id: "323",
            family: "menu",
            type: "3",
            label: "Beef Escalopes with Madeira Sauce",
            notes: "Delicious beef escalopes accompanied with a Madeira wine sauce and fresh mushrooms.",
            price: "13.00"
            },
            {
            id: "334",
            family: "menu",
            type: "5",
            label:"Spinach Puree",
            notes:"Made with spinach, olive oil and garlic",
            price: "13.00"
            },
            {
                id: "335",
                family: "menu",
                type: "5",
                label:"French Fries",
                notes:"Potatoes cut into thin sticks and fried until golden brown",
                price: "13.00"
            },
            {
                id: "336",
                family: "menu",
                type: "5",
                label:"Sautéed Greens",
                notes:"Greens sautéed in olive oil and garlic",
                price: "13.00"
            }
]
const startersTypes = [
    {
        type: "2",
        label: "Starters"
    },
    {
        type: "1",
        label: "Salads"
    },
]

const startersArticles= [
    {
        id: "524",
        family: "menu",
        type: "1",
        label: "Spring Salad",
        notes: "A delicious fresh salad with lettuce, tomato, carrot, cucumber and vinaigrette.",
        price: "13.00"
    },
    {
        id: "525",
        family: "menu",
        type: "2",
        label: "Prawn Cocktail",
        notes: "Boiled prawns served with a pink sauce and garnished with lettuce, tomato and lemon.",
        price: "13.00"
    },
    {
        id: "526",
        family: "menu",
        type: "2",
        label: "Prawn Soup",
        notes: "A rich and creamy shrimp soup with a touch of coriander.",
        price: "13.00"
    },
    {
        id: "527",
        family: "menu",
        type: "2",
        label: "Fresh Mushrooms Sautéed with Ham",
        notes: "Fresh mushrooms sautéed with garlic and ham, seasoned with herbs.",
        price: "13.00"
    },
    {
        id: "528",
        family: "menu",
        type: "1",
        label: "Special Salad",
        notes: "A salad with fresh and varied ingredients, such as lettuce, arugula, sun-dried tomato, feta cheese, nuts and balsamic vinaigrette.",
        price: "13.00"
    },
    {
        id: "529",
        family: "menu",
        type: "1",
        label: "Cold Asparagus with Mayonnaise",
        notes: "Fresh cooked asparagus served with homemade mayonnaise and a touch of lemon.",
        price: "13.00"
    },
    {
        id: "530",
        family: "menu",
        type: "2",
        label: "Clams Bulhão Pato",
        notes: "Fresh clams cooked in a garlic and coriander sauce.",
        price: "13.00"
    },
    {
        id: "531",
        family: "menu",
        type: "2",
        label: "Garlic Prawns",
        notes: "Shrimp sautéed with garlic and olive oil, seasoned with paprika and a touch of lemon.",
        price: "13.00"
    },
    {
        id: "532",
        family: "menu",
        type: "2",
        label: "Flavored Smoked Salmon",
        notes: "Smoked salmon with a touch of herbs, served with wholemeal bread toast.",
        price: "13.00"
    },
    {
        id: "533",
        family: "menu",
        type: "2",
        label: "Serrano Ham",
        notes: "Delicious sliced serrano ham, served with bread and olives.",
        price: "13.00"
    },
]
export const menuSelection = [
    {
        type: "0",
        label: "starters",
        types: startersTypes,
        articles: startersArticles
    },
    {
        type: "1",
        label: "mainDishes",
        types: mainTypes,
        articles: mainArticles
    },
    {
        type: "2",
        label: "desserts",
        types: dessertTypes,
        articles: dessertArticles
    },
    {
        type: "3",
        label: "beverages",
        types: beveragesTypes,
        articles: beveragesArticles
    },
    {
        type: "4",
        label: "wines",
        types: wineTypes,
        articles: wineArticles
    },
]
