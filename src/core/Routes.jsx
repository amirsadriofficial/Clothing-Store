import Home from '../component/home/home/Home'
import Shop from '../component/shop/shop/Shop'
import SingleProduct from '../component/shop/single-product/SingleProduct'
import About from '../component/about/About'
import Contact from '../component/contact/Contact'
import Cart from '../component/cart/Cart'
import Favorites from '../component/favorites/Favorites'
import Help from '../component/help/Help'

const Routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/product/:id', component: SingleProduct },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/cart', component: Cart },
  { path: '/favorites', component: Favorites },
  { path: '/help', component: Help },
]

export default Routes
