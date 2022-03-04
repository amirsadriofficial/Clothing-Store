import bagProduct1 from '../assets/images/products/bags/bag-product-01.jpg'
import bagProduct2 from '../assets/images/products/bags/bag-product-02.jpg'
import bagProduct3 from '../assets/images/products/bags/bag-product-03.webp'
import bagProduct4 from '../assets/images/products/bags/bag-product-04.webp'
import bagProduct5 from '../assets/images/products/bags/bag-product-05.webp'
import manProduct1 from '../assets/images/products/men/man-product-01.jpg'
import manProduct2 from '../assets/images/products/men/man-product-02.jpg'
import manProduct3 from '../assets/images/products/men/man-product-03.jpg'
import manProduct4 from '../assets/images/products/men/man-product-04.jpg'
import manProduct5 from '../assets/images/products/men/man-product-05.png'
import manProduct6 from '../assets/images/products/men/man-product-06.webp'
import manProduct7 from '../assets/images/products/men/man-product-07.jpg'
import manProduct8 from '../assets/images/products/men/man-product-08.jpg'
import manProduct9 from '../assets/images/products/men/man-product-09.jpg'
import shoesProduct1 from '../assets/images/products/shoes/shoes-product-01.webp'
import shoesProduct2 from '../assets/images/products/shoes/shoes-product-02.webp'
import shoesProduct3 from '../assets/images/products/shoes/shoes-product-03.webp'
import shoesProduct4 from '../assets/images/products/shoes/shoes-product-04.webp'
import shoesProduct5 from '../assets/images/products/shoes/shoes-product-05.webp'
import watchProduct1 from '../assets/images/products/watches/watch-product-01.jpg'
import watchProduct2 from '../assets/images/products/watches/watch-product-02.jpg'
import watchProduct3 from '../assets/images/products/watches/watch-product-03.webp'
import watchProduct4 from '../assets/images/products/watches/watch-product-04.webp'
import watchProduct5 from '../assets/images/products/watches/watch-product-05.webp'
import watchProduct6 from '../assets/images/products/watches/watch-product-06.webp'
import womanProduct1 from '../assets/images/products/women/woman-product-01.jpg'
import womanProduct2 from '../assets/images/products/women/woman-product-02.jpg'
import womanProduct3 from '../assets/images/products/women/woman-product-03.jpg'
import womanProduct4 from '../assets/images/products/women/woman-product-04.jpg'
import womanProduct5 from '../assets/images/products/women/woman-product-05.jpg'
import womanProduct6 from '../assets/images/products/women/woman-product-06.jpg'
import womanProduct7 from '../assets/images/products/women/woman-product-07.jpg'
import womanProduct8 from '../assets/images/products/women/woman-product-08.jpg'
import womanProduct9 from '../assets/images/products/women/woman-product-09.jpg'
import womanProduct10 from '../assets/images/products/women/woman-product-10.jpg'
import womanProduct11 from '../assets/images/products/women/woman-product-11.jpg'

const ALL_PRODUCTS = [
  {
    id: 'bag_product_1',
    name: 'Celine Micro Belt Bag',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: bagProduct1,
    price: 70,
  },
  {
    id: 'bag_product_2',
    name: 'Black Belt Bag',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: bagProduct2,
    price: 90,
  },
  {
    id: 'bag_product_3',
    name: 'Beautiful Chamber Bag',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: bagProduct3,
    price: 135,
  },
  {
    id: 'bag_product_4',
    name: 'Large Duffel Bag',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: bagProduct4,
    price: 110,
  },
  {
    id: 'bag_product_5',
    name: 'Small Duffel Bag ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: bagProduct5,
    price: 115,
  },
  {
    id: 'man_product_1',
    name: 'Only Check Trouser',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: manProduct1,
    price: 110,
  },
  {
    id: 'man_product_2',
    name: 'Herschel Supply',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: manProduct2,
    price: 95,
  },
  {
    id: 'man_product_3',
    name: 'White Comfort T-shirt',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: manProduct3,
    price: 165,
  },
  {
    id: 'man_product_4',
    name: 'Cool Black T-shirt',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: manProduct4,
    price: 140,
  },
  {
    id: 'man_product_5',
    name: 'Lee White Pants',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: manProduct5,
    price: 80,
  },
  {
    id: 'man_product_6',
    name: 'Comedy Shirts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: manProduct6,
    price: 120,
  },
  {
    id: 'man_product_7',
    name: 'Regular Fit T-shirt',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: manProduct7,
    price: 75,
  },
  {
    id: 'man_product_8',
    name: 'Stanley Stella Tee Shirt',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: manProduct8,
    price: 210,
  },
  {
    id: 'man_product_9',
    name: 'Classic T-Shirt Mens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: manProduct9,
    price: 90,
  },
  {
    id: 'shoes_product_1',
    name: 'Adidas Black Shoes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: shoesProduct1,
    price: 95,
  },
  {
    id: 'shoes_product_2',
    name: 'Adidas Gray Shoes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: shoesProduct2,
    price: 90,
  },
  {
    id: 'shoes_product_3',
    name: 'Adidas Pink Shoes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: shoesProduct3,
    price: 95,
  },
  {
    id: 'shoes_product_4',
    name: 'Adidas Black Sneakers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: shoesProduct4,
    price: 120,
  },
  {
    id: 'shoes_product_5',
    name: 'Adidas Gray Sneakers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: shoesProduct5,
    price: 100,
  },
  {
    id: 'watch_product_1',
    name: 'Watch With Jelly Strap ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: watchProduct1,
    price: 90,
  },
  {
    id: 'watch_product_2',
    name: 'Watch With Fabric Strap ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: watchProduct2,
    price: 85,
  },
  {
    id: 'watch_product_3',
    name: 'Modern Black Watch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: watchProduct3,
    price: 220,
  },
  {
    id: 'watch_product_4',
    name: 'Beautiful White Watch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: watchProduct4,
    price: 95,
  },
  {
    id: 'watch_product_5',
    name: 'Modern Brown Watch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: watchProduct5,
    price: 225,
  },
  {
    id: 'watch_product_6',
    name: 'Beautiful Black Watch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: watchProduct6,
    price: 205,
  },
  {
    id: 'woman_product_1',
    name: 'Esprit Ruffle Shirt',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: womanProduct1,
    price: 105,
  },
  {
    id: 'woman_product_2',
    name: 'Herschel Supply',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: womanProduct2,
    price: 120,
  },
  {
    id: 'woman_product_3',
    name: 'T-Shirt With Sleeve',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: womanProduct3,
    price: 85,
  },
  {
    id: 'woman_product_4',
    name: 'Classic Trench Coat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: womanProduct4,
    price: 90,
  },
  {
    id: 'woman_product_5',
    name: 'Front Pocket Jumper',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: womanProduct5,
    price: 135,
  },
  {
    id: 'woman_product_6',
    name: 'Square Neck Back',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: womanProduct6,
    price: 70,
  },
  {
    id: 'woman_product_7',
    name: 'Shirt in Stretch Cotton',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: womanProduct7,
    price: 220,
  },
  {
    id: 'woman_product_8',
    name: 'Pieces Metallic Printed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: womanProduct8,
    price: 160,
  },
  {
    id: 'woman_product_9',
    name: 'Femme T-Shirt In Stripe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: womanProduct9,
    price: 180,
  },
  {
    id: 'woman_product_10',
    name: 'Cloud Jersey Cardigan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: womanProduct10,
    price: 145,
  },
  {
    id: 'woman_product_11',
    name: 'Women Office Wear',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: womanProduct11,
    price: 200,
  },
]

export default ALL_PRODUCTS
