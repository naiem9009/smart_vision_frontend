import React from 'react'
import darkLogo from "../assets/images/dark_logo.png"
import darkFacebook from "../assets/images/dark_fac.png"
import { Link } from 'react-router-dom'
import { navbar } from '../routes'

const Footer = () => {
  return (
    <React.Fragment>
        <footer className='bg-black w-full p-[2rem]'>
            <div className='flex justify-between items-center'>
                <img className='w-20' src={darkLogo} alt="" />
                <div className='flex flex-row gap-2'>
                    <img className='w-8 h-8' src={darkFacebook} alt="" />
                    <img className='w-8 h-8' src={darkFacebook} alt="" />
                    <img className='w-8 h-8' src={darkFacebook} alt="" />
                    <img className='w-8 h-8' src={darkFacebook} alt="" />
                </div>
            </div>


            <div className='mt-8 text-white flex flex-row justify-between items-start'>
                <div className='font-alata'>
                    <h1 className='text-xl font-semibold mb-2'>Contact</h1>
                    <p className='text-sm'>Adress: Horn of Africa - Somalia</p>
                    <p className='text-sm '>Email: info@smartvisionconsultancy.org</p>
                    <p className='text-sm'>Call Us: +252 90 7797395</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-2'>Information</h1>
                    <div className="font-alata">
                        {navbar?.filter((_, i) => i < 4)?.map((nav, i) => (
                            <Link className='text-sm block' key={i} to={nav.nav_Link}>{nav.nav_name}</Link>
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-2'>Help Center</h1>

                    <div className=''>
                        <Link className='text-sm block' to="">Supports</Link>
                        <Link className='text-sm block' to="">Terms & Condition</Link>
                        <Link className='text-sm block' to="">Privacy Policy</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-alata font-bold'>TOGETHER WE ARE <br /> STRONGER. JOIN THE <br/> CONVERSATION.</h1>
                </div>
            </div>


        </footer>

        <hr className='border border-gray-600' />

        <p className='py-4 text-center text-white bg-black'>Copyright © 2024 Smart Vision Powered by <Link className='underline' to={"/"}>Fowzi Media</Link>
        </p>
    </React.Fragment>
  )
}

export default Footer
