import React from 'react'
// import { assets } from '../../assets/assets'  // no longer needed for logo
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import logo from '../../assets/logos.png'  // ✅ import your new logo

const NavbarOwner = () => {
    const { user } = useAppContext()

    return (
        <div className='flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-borderColor relative transition-all'>
            <Link to='/'>
                <img src={logo} alt="logo" className="h-38"/>  {/* ✅ updated logo and bigger height */}
            </Link>
            <p>Welcome, {user?.name || "Owner"}</p>
        </div>
    )
}

export default NavbarOwner
