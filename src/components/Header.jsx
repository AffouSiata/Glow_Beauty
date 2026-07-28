import logo from '../assets/logo1.png'
import { Search, Heart, ShoppingCart } from "lucide-react"


function Header() {
    const hoverstyle = 'cursor-pointer hover:text-[#fb85ea] transition-all duration-300' 
    const favoriteCount = 2;
    const cartCount = 5;
  return (
    <>
       <header className='w-full shadow-md'>
            <div className='max-w-7xl mx-auto flex items-center justify-between py-2'>
                <div>
                    <img src={logo} alt="Logo" className='w-16 h-auto'/>
                </div>
                <nav >
                    <ul className='flex gap-9 text-[#3b0133]'>
                        <li><a href="#" className={`${hoverstyle} text-[#fb85ea]`}>Home</a></li>
                        <li><a href="#" className={hoverstyle}>Products</a></li>
                        <li><a href="#" className={hoverstyle}>About</a></li>
                        <li><a href="#" className={hoverstyle}>Contact</a></li>
                    </ul>
                </nav>
                <div className='flex gap-4   text-[#3b0133]'>
                    <Search className={hoverstyle} />
                   <div className='relative'>
                        <Heart className={hoverstyle} />
                        <span className="absolute -top-2 -right-2 bg-[#fb85ea] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{favoriteCount}</span>
                   </div>
                    <div className='relative'>
                        <ShoppingCart className={hoverstyle} />
                        <span className="absolute -top-2 -right-2 bg-[#fb85ea] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
                    </div>
                </div>
                
            </div>
       </header>
               
    </>
   
  )
}

export default Header

