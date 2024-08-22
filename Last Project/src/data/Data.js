export const category = [
  {
    id: 1,
    category_name: "Dresses",  // Corrected typo
    subCat: [
      {
        id: 11,
        category_name: "Men's Dresses",  // Corrected capitalization
      },
      {
        id: 12,
        category_name: "Women's Dresses",  // Corrected capitalization
      },
      {
        id: 13,
        category_name: "Baby's Dresses",  
      },
    ],
    id:1,
    category_name: "Shoes",
    quantity: "100 Products",
    img: "../assets/img/shoes.jpg",
  },
  {
    id: 2,
    category_name: "Shirts",
    quantity: "100 Products",
    img: "../assets/img/shirts.jpg",
  },
  {
    id: 3,
    category_name: "Jeans",
    quantity: "100 Products",
    img: "../assets/img/jeans.png",
  },
  {
    id: 4,
    category_name: "Casual Shirts",
    quantity: "100 Products",
    img: "../assets/img/cshirts.jpg",
  },
  {
    id: 5,
    category_name: "Sportswear",  
    quantity: "100 Products",
    img: "../assets/img/sportswear.jpg",
  },
  {
    id: 6,
    category_name: "Kurta",
    quantity: "100 Products",
    img: "../assets/img/kurta.jpg",
  },
  {
    id: 7,
    category_name: "Blazers",
    quantity: "100 Products",
    img: "../assets/img/blazers.jpg",
  },
  {
    id: 8,
    category_name: "Jackets",
    quantity: "100 Products",
    img: "../assets/img/jackets.jpg",
  },
];

export const nav = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/shop",
    text: "Shop",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/contact",
    text: "Contact",
  },
  {
    path: "/OrderHistory",
    text: "My Order History",
  },
  
];
export const socialIcon = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
    name: "facebook",
  },
  {
    icon: <i className="fab fa-instagram"></i>,
    name: "instagram",
  },
];

export const products = [
  {
    id: 1,
    product_name: "Jogger Shoes",
    product_img: "../assets/img/cat-3.jpg",
    price: "34.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },

  {
    id: 2,
    product_name: "Gens T-Shirt",
    product_img: "../assets/img/product-2.jpg",
    price: "12.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },

  {
    id: 3,
    product_name: "Sneakers White & Green",
    product_img: "../assets/img/sneakers.jpg",
    price: "18.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },

  {
    id: 4,
    product_name: "Shoes",
    product_img: "../assets/img/product-4.jpg",
    price: "13.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },
  {
    id: 5,
    product_name: "Black & Red Sleaper",
    product_img: "../assets/img/3996.jpg",
    price: "23.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },

  {
    id: 6,
    product_name: "White & Red Sneakers",
    product_img: "../assets/img/20868.jpg",
    price: "43.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },
  {
    id: 7,
    product_name: "Boys Sandel",
    product_img: "../assets/img/24695.jpg",
    price: "63.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },
  {
    id: 8,
    product_name: "Boys Black Sandel Soft",
    product_img: "../assets/img/24098.jpg",
    price: "53.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },  
  {
    id: 9,
    product_name: "Mens Shoes",
    product_img: "../assets/img/6816.jpg",
    price: "53.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },  
  {
    id: 10,
    product_name: "Leather Shoes",
    product_img: "../assets/img/6810.jpg",
    price: "53.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },  
  {
    id: 11,
    product_name: "Sleepers Addidas",
    product_img: "../assets/img/6818.jpg",
    price: "53.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },  
  {
    id: 12,
    product_name: "Dress Black Shoes",
    product_img: "../assets/img/7399.jpg",
    price: "53.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },  
  {
    id: 13,
    product_name: "Service Shoes Jogger",
    product_img: "../assets/img/7797.jpg",
    price: "53.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },  
  {
    id: 14,
    product_name: "Chaleesa Shoes Leather",
    product_img: "../assets/img/9000.jpg",
    price: "53.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },  
  {
    id: 15,
    product_name: "Sandel soft soul ",
    product_img: "../assets/img/11946.jpg",
    price: "53.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },  
  {
    id: 16,
    product_name: "Jogger Shoes White",
    product_img: "../assets/img/12885.jpg",
    price: "53.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },  
  {
    id: 17,
    product_name: "Black & Golden Jogger Shoes",
    product_img: "../assets/img/12958.jpg",
    price: "53.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },  
  {
    id: 18,
    product_name: "White Sneakers",
    product_img: "../assets/img/sneakers.jpg",
    price: "53.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },  
  {
    id: 19,
    product_name: "Brown Sleeper With soft Soul",
    product_img: "../assets/img/11915.jpg",
    price: "53.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },  
  {
    id: 20,
    product_name: "Black Dress Shoes",
    product_img: "../assets/img/shoes.jpg",
    price: "53.99",
    stars: Array(5).fill(
      <small className="fa fa-star text-primary mr-1"></small>
    ),
    ratingCount: 99,
  },  
];
export const banner = [
  {
    title: "Special Offer",
    discount: "save 20%",
    img: "../assets/img/offerr1.png",
    btn: "Shop Now",
  },
  {
    title: "Special Offer",
    discount: "save 20%",
    img: "../assets/img/offere2.png",
    btn: "Shop Now",
  },
];
export const features = [
  {
    id: 1,
    icon: <h1 className="fa fa-check text-primary m-0 mr-3"></h1>,
    title: "Quality Product",
  },
  {
    id: 2,
    icon: <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>,
    title: "Free Shipping",
  },
  {
    id: 3,
    icon: <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>,
    title: "14-Day Return",
  },
  {
    id: 4,
    icon: <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>,
    title: "24/7 Support",
  },
];

export const vendors = [
  {
    image: "../assets/img/6810.jpg",
  },
  {
    image: "../assets/img/7331.jpg",
  },
  {
    image: "../assets/img/3996.jpg",
  },
  {
    image: "../assets/img/7399.jpg",
  },
  {
    image: "../assets/img/7797.jpg",
  },
  {
    image: "../assets/img/9000.jpg",
  },
  {
    image: "../assets/img/11915.jpg",
    
  },
  {
    image: "../assets/img/12958.jpg",
  },
  {
    image: "../assets/img/12885.jpg",
  },
  {
    image: "../assets/img/12958.jpg",
  },
  {
    image: "../assets/img/12885.jpg",
  }

];

export const carousel = [
  {
    cover_img: "../assets/img/mensh.jpg",
    title: "Men Fashion",
    description:
      "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    btn: "Shop Now",
  },
  {
    cover_img: "../assets/img/womwn.jpg",
    title: "Women Fashion",
    description:
      "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    btn: "Shop Now",
  },
  {
    cover_img: "../assets/img/kids.jpg",
    title: "Kids Fashion",
    description:
      "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    btn: "Shop Now",
  },
];

export const footerTouch = [
  {
    icon: <i className="fa fa-map-marker-alt text-primary mr-3"></i>,
    contact: "123 Street, Lahore, Pakistan",
  },
  {
    icon: <i className="fa fa-envelope text-primary mr-3"></i>,
    contact: "shaheryarnoor36@gmail.com",
  },
  {
    icon: <i className="fa fa-phone-alt text-primary mr-3"></i>,
    contact: "+92 318 6898684",
  },
];

export const footer = [
  {
    id: 1,
    header: "Quick Shop",
  },
  {
    id: 2,
    header: "My Account",
  },
];

export const sidebar = [
  {
    id: 1,
    header: "Filter By Price",
    all: "All Price",
    total_quantity: "1000",
    subItem: [
      {
        variety: "0-100",
        quantity: "150",
      },
      {
        variety: "100-200",
        quantity: "150",
      },
      {
        variety: "200-300",
        quantity: "150",
      },
      {
        variety: "300-400",
        quantity: "150",
      },
      {
        variety: "400-500",
        quantity: "150",
      },
    ],
  },
  {
    id: 2,
    header: "Filter By Color",
    all: "All Color",
    total_quantity: "1000",
    subItem: [
      {
        variety: "Black",
        quantity: "30",
      },
      {
        variety: "White",
        quantity: "11",
      },
      {
        variety: "Green",
        quantity: "20",
      },
      {
        variety: "Red",
        quantity: "10",
      },
      {
        variety: "Yellow",
        quantity: "15",
      },
    ],
  },
  {
    id: 3,
    header: "Filter By Size",
    all: "All Size",
    total_quantity: "1000",
    subItem: [
      {
        variety: "XS",
        quantity: "60",
      },
      {
        variety: "S",
        quantity: "19",
      },
      {
        variety: "L",
        quantity: "150",
      },
      {
        variety: "XL",
        quantity: "16",
      },
      {
        variety: "XXL",
        quantity: "15",
      },
    ],
  },
];
