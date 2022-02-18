import Home from './component/home/home/Home'
import Shop from './component/shop/shop/Shop'
import SingleProduct from './component/shop/single-product/SingleProduct'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Cart from './component/cart/Cart'
import Favorites from './component/favorites/Favorites'
import Help from './component/help/Help'
import Profile from './component/account/profile/Profile'
import SignIn from './component/account/sign-in/SignIn'
import SignUp from './component/account/sign-up/SignUp'
import NotFound from './component/not-found/NotFound'

const Routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/login/get-phone-no', component: LoginGetPhone },
  { path: '/login/verify-code', component: LoginVerifyCode },
  { path: '/advice', component: Advice },
  { path: '/insurance/third-party', component: BimeIntroduction },
  { path: '/insurance/third-party-faq', component: Questions },
  { path: '/third-party/compare', component: ThirdPartyCompare },
]

export default Routes
