import logo from '../../assets/logo1.png'
import { Search, Heart, ShoppingCart } from "lucide-react"
import { NavLink  } from 'react-router-dom'
import CartDrawer from '../Cart/CartDrawer'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'


function Header() {
    const hoverstyle = 'cursor-pointer hover:text-[#fb85ea] transition-all duration-300' 
    const favoriteCount = 2;
   

    const { cart } = useContext(CartContext)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const cartCount = cart.reduce((total, item) => {
        return total + item.quantity
    }, 0)

  return (
    <>
       <header className='fixed top-0 left-0 w-full shadow-md bg-white z-50'>
            <div className='max-w-7xl mx-auto flex items-center justify-between py-2'>
                <div>
                    <img src={logo} alt="Logo" className='w-16 h-auto'/>
                </div>
                <nav>
                    <ul className='flex gap-9 text-[#3b0133]'>
                        <li><NavLink to="/" className={({isActive}) => `${hoverstyle} ${isActive ? 'text-[#fb85ea]' : 'text-[#3b0133]'}`}>Home</NavLink></li>
                        <li><NavLink to="/shop" className={({isActive}) => `${hoverstyle} ${isActive ? 'text-[#fb85ea]' : 'text-[#3b0133]'}`}>Shop</NavLink></li>
                        <li><NavLink to="/about" className={({isActive}) => `${hoverstyle} ${isActive ? 'text-[#fb85ea]' : 'text-[#3b0133]'}`}>About</NavLink></li>
                        <li><NavLink to="/contact" className={({isActive}) => `${hoverstyle} ${isActive ? 'text-[#fb85ea]' : 'text-[#3b0133]'}`}>Contact</NavLink></li>
                    </ul>
                </nav>
                <div className='flex gap-4   text-[#3b0133]'>
                    <Search className={hoverstyle} />
                   <div className='relative'>
                        <Heart className={hoverstyle} />
                        <span className="absolute -top-2 -right-2 bg-[#fb85ea] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{favoriteCount}</span>
                   </div>
                    <div className='relative'>
                        <ShoppingCart className={hoverstyle} onClick={() => setIsCartOpen(true)}/>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#fb85ea] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
                        )}
                    </div>
                </div>
                
            </div>
       </header>
       <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen}/>
               
    </>
   
  )
}

export default Header

