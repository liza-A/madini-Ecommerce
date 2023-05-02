const PRODUCTS = [
    {
        id: 1,
        name: "Lwera Sand",
        price:  120000,
        image: require("../assets/lwelasand.png"),
        category:[
          { 
           id: '1',
           name: 'Construction',
           subCategory1:[
            {
              id:1,
              name:'Sand'
            }
           ]
          },
          
        ],
        subCategory1:'Sand',
        description:
          "Ideal for Plaster. Locally sourced from Lwera,Masaka.Strength 7KN Aggregate Size 25mm"  
    },
    {
        id: 2,
        name: "Nyanja Sand",
        price:  120000,
        image: require("../assets/lwelasand.png"),
        category:'Construction',
        subCategory1:'Sand',
        description:
          "Ideal for Plaster. Locally sourced from Lwera,Masaka.Strength 7KN Aggregate Size 25mm"  
    },
    {
        id: 3,
        name: "Lake Sand",
        price:  120000,
        image: require("../assets/lwelasand.png"),
        category:'Construction',
        subCategory1:'Sand',
        description:
          "Ideal for Plaster. Locally sourced from Lwera,Masaka.Strength 7KN Aggregate Size 25mm"  
    },
    {
        id: 4,
        name: "Pavers",
        price:  120000,
        image: require("../assets/pavers.png"),
        category:'Construction',
        subCategory1:'Sand',
        description:
          ""  
    },
    {
        id: 5,
        name: "Plaster Sand",
        price:  120000,
        image: require("../assets/Plastersand1.png"),
        category:'Construction',
        subCategory1:'Sand',
        description:
          "Ideal for Plaster. Locally sourced from Lwera,Masaka.Strength 7KN Aggregate Size 25mm"  
    },

    {
      id: 6,
      name: "Coarse Sand (River sand)/Elf",
      price:  120000,
      image: require("../assets/coursesand.jpg"),
      category:'Construction',
      subCategory1:'Sand',
      description:
        "Large Particle Sand",
      UseCase:"*Concrete mixing *Building Blocks"
  },

  {
    id: 7,
    name: "Brick Sand (Lwera-Nyanja)/Elf",
    price:  100000,
    image: require("../assets/bricksand.jpeg"),
    category:'Construction',
    subCategory1:'Sand',
    description:"Ranges from white, grey to yellow in color",
    UseCase:"*Building bricks *Mixing Morton *Landscape sand"  
  },

  {
    id: 8,
    name: "Square Pavers/ Sq Mtr",
    price:  35000,
    image: require("../assets/squarepavers.png"),
    category:'Construction',
    subCategory1:'Sand',
    description:"",
    UseCase:""  
},
{
  id: 9,
  name: "Hexagonal Pavers",
  price:  35000,
  image: require("../assets/hexagonalpavers.png"),
  category:'Construction',
  subCategory1:'Sand',
  description:"",
  UseCase:""  
},

{
  id: 10,
  name: "Interlocking Pavers",
  price:  45000,
  image: require("../assets/interlockingpavers.png"),
  category:'Construction',
  subCategory1:'Sand',
  description:"",
  UseCase:""  
},

{
  id: 11,
  name: "Nails 6-inch/kilo",
  price:  12000,
  image: require("../assets/nails.jpg"),
  category:'Construction',
  subCategory1:'Sand',
  description:"",
  UseCase:""  
},

{
  id: 12,
  name: "Gumboots/Pair",
  price:  40000,
  image: require("../assets/boots.jpeg"),
  category:'Construction',
  subCategory1:'Sand',
  description:"Ranges from white, grey to yellow in color",
  UseCase:"*Building bricks *Mixing Morton *Landscape sand"  
},

{
  id: 13,
  name: "Gloves/pair",
  price:  25000,
  image: require("../assets/gloves.jpeg"),
  category:'Construction',
  subCategory1:'Sand',
  description:"",
  UseCase:""  
},

  
]
const dummyData = {
    PRODUCTS
};

export default dummyData;

// export function getProducts(){
//     return PRODUCTS;
// }

// export function getProduct(id){
//     return PRODUCTS.find((product) => product.id == id);
// }