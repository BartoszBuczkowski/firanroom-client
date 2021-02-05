import logo from '@/assets/svg/logo.svg'

const Header = () => {
   return (
      <div className="bg-white border-b border-gray-50">
         <div className="flex justify-between h-16 max-w-7xl m-auto">
            <div className="flex">
               <div className="flex items-center mx-1">
                  <img className="h-full p-3" src={logo} alt="firanroom logo" />
                  <span className="font-light text-xl">firanroom</span>
               </div>
               <ul className="flex items-center mx-5">
                  <li className="mx-2">Home</li>
                  <li className="mx-2">Blog</li>
                  <li className="mx-2">Contact</li>
               </ul>
            </div>
            <div className="flex items-center">
               <span className="text-sm font-light mx-4">sign in</span>
               <span className="text-sm font-light mx-4">register</span>
            </div>
         </div>
      </div>
   )
}

export default Header
