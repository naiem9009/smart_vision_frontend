import React from 'react'
import { Link } from 'react-router-dom'
import { navbar } from '../routes'
import LogoImage from "../assets/images/logo.png"

const Navbar = () => {
  return (

    <div>

        <nav className="p-[2rem] mt-2 bg-white w-full flex relative justify-between items-center mx-auto h-20">

            <div className="inline-flex">
                <a className="" href="/">
                    <div className="hidden md:block">
                        {/* logo */}
                        <img className='w-16' src={LogoImage} />
                    </div>
                </a>
            </div>


            <div className="flex-initial">
                <div className="flex justify-end items-center relative">
                
                    <div className="flex gap-5 items-center">
                        {navbar.map((nav, index) => (
                            <Link key={index} className={`inline-block py-2 px-3 hover:bg-gray-200 rounded-full ${nav?.extra_class && nav?.extra_class}`} href="#">
                                <div className="flex font-semibold font-alata items-center relative cursor-pointer whitespace-nowrap">{nav.nav_name}</div>
                            </Link>
                        ))}
                        
                    </div>

                </div>
            </div>

        </nav>
    </div>
  )
}

export default Navbar
