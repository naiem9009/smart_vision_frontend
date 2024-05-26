import React from 'react'
import homeImage from "../../assets/images/home_image.png"
import aboutImage from "../../assets/images/choose_us.png"
import pcImage from "../../assets/images/pc_img.png"
import userImage from "../../assets/images/user_img.png"
import timeImage from "../../assets/images/time_img.png"
import trackImage from "../../assets/images/track_img.png"
import unicefImage from "../../assets/images/unicef.png"
import qouteImage from "../../assets/images/qoute.png"

import adesoImage from "../../assets/images/adeso.jpg"
import unicef_logo from "../../assets/images/unicef_logo.png"
import drc_logo from "../../assets/images/drc.jpg"
import somail_logo from "../../assets/images/somail.jpg"
import swa_logo from "../../assets/images/swa.png"
import lio_logo from "../../assets/images/lio.jpg"
import grt_logo from "../../assets/images/grt.png"
import kon_logo from "../../assets/images/kon.jpg"
import pun_logo from "../../assets/images/pun.jpg"
import practical_action_logo from "../../assets/images/practical_action.jpg"
import sm_logo from "../../assets/images/sm.jpg"
import hand_logo from "../../assets/images/hand.jpg"




import facebookfImage from "../../assets/images/facebook_img.png"

import team1Image from "../../assets/images/team1.jpg"
import team2Image from "../../assets/images/team2.jpg"
import team3Image from "../../assets/images/team3.jpg"
import team4Image from "../../assets/images/team4.png"



import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, MoveRight } from 'lucide-react'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <React.Fragment>
      <div className='flex flex-row items-center justify-between p-[2rem]'>
        <div className='w-3/4'>
          <h1 className='text-6xl font-bold text-[#373887] mb-4 font-alata'>A new frontier in research and development</h1>
          <p className='text-gray-500 font-sm text-justify font-semibold font-alata mb-3'>Smart Vision for Consultancy and Development was incorporated in 2011 in Somalia. We focus majorly on monitoring, evaluation, research and learning (MERL), institutional capacity development services, private sector development, quality infrastructure and trade facilitation, mainly in Somalia and across the greater Horn of Africa region.</p>

          <Link className='text-gray-600 font-alata font-bold underline' to={"/"}>See More</Link>
        </div>
        <div className=''>
          <img className='w-[694px]' src={homeImage} alt="" />
        </div>
      </div>



      {/* about us */}
      <div className='flex flex-row justify-between items-center gap-44 mt-28 p-[2rem]'>
        <div>
          <img className='w-[694px]' src={aboutImage} alt="" />
        </div>

        <div className='w-1/2'>
          <h1 className='text-6xl font-bold text-[#373887] mb-10 font-alata'>About Us</h1>
          <p className='text-gray-500 font-sm text-justify font-semibold font-alata mb-10'>Smart Vision for Consultancy and Development was incorporated in 2011 in Somalia. We focus majorly on monitoring, evaluation, research and learning (MERL), institutional capacity   development services, private sector development, quality infrastructure and trade facilitation, mainly in Somalia and across the greater Horn of Africa region. At Smart Vision, we are committed to professionalism and timely and quality service delivery. Smart Vision for Consultancy and Development was incorporated in 2011 in Somalia.At Smart Vision</p>

          <Link>
            <Button className={"flex items-center gap-2 rounded-3xl"}>Read More <MoveRight size={18} /></Button>
          </Link>
        </div>
      </div>


      {/* our services */}
      <div className='mt-32 p-[2rem]'>
        <div className='w-1/2 mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-3 font-alata'>Our Services</h1>
          <p className='text-sm text-gray-600 font-alata'>Smart Vision for Consultancy and Development was incorporated in 2011 in Somalia. We focus majorly on monitoring, evaluation, research and learning (MERL).</p>
        </div>


        <div className='flex flex-row items-center justify-center gap-5 mt-20'>


          <div className='cursor-pointer w-10 h-10 flex items-center justify-center border border-white rounded-full bg-red-500'>
            <ChevronLeft className='text-white' />
          </div>


        <div className=''>
          <div className='grid md:grid-cols-3 gap-10 grid-cols justify-center items-center'>



            <div className='bg-white w-[300px] shadow-md rounded-md flex flex-col items-center gap-5 p-5'>
              <div className='bg-[#79548b] p-5 rounded-full flex items-center justify-center relative after:content-[""] after:absolute after:bg-[#ebeeea] after:w-full after:h-full after:rounded-full after:bottom-1 inset-0 after:z-1'>
                <img className='w-5 z-20' src={pcImage} alt="" />
              </div>

              <div className='w-1/2 mx-auto text-center'>
                <h1 className='text-2xl font-alata font-semibold mb-8'>Third Party Monitoring</h1>
                <Link className='font-alata underline'>See More</Link>
              </div>
            </div>


            <div className='bg-white w-[300px] shadow-md rounded-md flex flex-col items-center gap-5 p-5 mb-20'>
              <div className='bg-[#79548b] p-5 rounded-full flex items-center justify-center relative after:content-[""] after:absolute after:bg-[#ebeeea] after:w-full after:h-full after:rounded-full after:bottom-1 inset-0 after:z-1'>
                <img className='w-5 z-20' src={timeImage} alt="" />
              </div>

              <div className='w-1/2 mx-auto text-center'>
                <h1 className='text-2xl font-alata font-semibold mb-8'>Third Party Monitoring</h1>
                <Link className='font-alata underline'>See More</Link>
              </div>
            </div>

            <div className='bg-white w-[300px] shadow-md rounded-md flex flex-col items-center gap-5 p-5'>
              <div className='bg-[#79548b] p-5 rounded-full flex items-center justify-center relative after:content-[""] after:absolute after:bg-[#ebeeea] after:w-full after:h-full after:rounded-full after:bottom-1 inset-0 after:z-1'>
                <img className='w-5 h-5 object-contain z-20' src={userImage} alt="" />
              </div>

              <div className='w-1/2 mx-auto text-center'>
                <h1 className='text-2xl font-alata font-semibold mb-8'>Third Party Monitoring</h1>
                <Link className='font-alata underline'>See More</Link>
              </div>
            </div>




          </div>
        </div>


        <div className='cursor-pointer w-10 h-10 flex items-center justify-center border border-white rounded-full bg-red-500'>
            <ChevronRight className='text-white' />
        </div>



        </div>
      </div>



      {/* Thematic Areas section */}





      {/* Recent Track Records */}

      <div className='mt-24 flex flex-row justify-between items-start gap-20 p-[2rem]'>
        <div className='w-1/2'>
          <h1 className='w-3/4 text-6xl font-alata font-bold mb-5'>Recent Track Records</h1>
          <p className='font-alata text-gray-600 w-4/5 mb-5'>Smart Vision for Consultancy and Development was incorporated in 2011 in Somalia. We focus majorly on monitoring, evaluation, research and learning (MERL).</p>
          <img src={trackImage} alt="" />
          <Button className={"flex flex-row gap-2 items-center mt-5 rounded-3xl"}>Read More <MoveRight size={18} /> </Button>
        </div>

        <div className='w-1/2'>


          <div className='bg-[#eaebed] rounded-lg cursor-pointer'>
            <div className='flex flex-row items-center justify-between p-3'>
              <h1 className='font-alata font-semibold'>2011 Track Record</h1>
              <ChevronUp />
            </div>

            <div>
            <table className="border-collapse w-full ">
              <thead>
                  <tr className=''>
                      <th className="p-3 text-sm rounded-l-2xl bg-[#441355] text-white hidden lg:table-cell">Status</th>
                      <th className="p-3 bg-[#441355] text-white hidden lg:table-cell">Date</th>
                      <th className="p-3 bg-[#441355] text-white hidden lg:table-cell">Role/project Title</th>
                      <th className="p-3 text-white hidden lg:table-cell rounded-r-2xl bg-[#441355]">Client</th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                      <td className="w-full lg:w-auto p-3 text-[#441355] text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 text-[#441355] px-2 py-1 text-xs font-bold uppercase">Status</span>
                        Completed
                      </td>
                      <td className="w-full lg:w-auto p-3 text-[#441355] text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 text-[#441355] px-2 py-1 text-xs font-bold uppercase">Date</span>
                          2011
                      </td>
                      <td className="w-full lg:w-auto p-3 text-gray-800 block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Role/project Title</span>
                          <span className="rounded font-alata py-1 text-xs font-semibold text-justify">Undertook a UNICEF-funded evaluation that aimed at  documenting strengths, weaknesses, lessons learnt and drawing  recommendations for consideration in the expansion of the project and  future interventions, and to determine whether expected results had been  achieved</span>
                      </td>
                      <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Client</span>
                          <img className='w-28' src={unicefImage} alt="" />
                      </td>
                  </tr>


                  <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                      <td className="w-full lg:w-auto p-3 text-[#441355] text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 text-[#441355] px-2 py-1 text-xs font-bold uppercase">Status</span>
                          Completed
                      </td>
                      <td className="w-full lg:w-auto p-3 text-[#441355] text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 text-[#441355] px-2 py-1 text-xs font-bold uppercase">Date</span>
                          2011
                      </td>
                      <td className="w-full lg:w-auto p-3 text-gray-800 block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Role/project Title</span>
                          <span className="rounded font-alata py-1 text-xs font-semibold text-justify">Undertook a UNICEF-funded evaluation that aimed at  documenting strengths, weaknesses, lessons learnt and drawing  recommendations for consideration in the expansion of the project and  future interventions, and to determine whether expected results had been  achieved</span>
                      </td>
                      <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Client</span>
                          {/* <img className='w-28' src={unicefImage} alt="" /> */}
                      </td>
                  </tr>
                  
                
              </tbody>
              </table>
            </div>
          </div>


          <div className='bg-[#eaebed] rounded-lg mt-3 cursor-pointer'>
            <div className='flex flex-row items-center justify-between p-3'>
              <h1 className='font-alata font-semibold'>2012 Track Record</h1>
              <ChevronDown />
            </div>
          </div>

          <div className='bg-[#eaebed] rounded-lg mt-3 cursor-pointer'>
            <div className='flex flex-row items-center justify-between p-3'>
              <h1 className='font-alata font-semibold'>2013 Track Record</h1>
              <ChevronDown />
            </div>
          </div>


          <div className='bg-[#eaebed] rounded-lg mt-3 cursor-pointer'>
            <div className='flex flex-row items-center justify-between p-3'>
              <h1 className='font-alata font-semibold'>2014 Track Record</h1>
              <ChevronDown />
            </div>
          </div>

          <div className='bg-[#eaebed] rounded-lg mt-3 cursor-pointer'>
            <div className='flex flex-row items-center justify-between p-3'>
              <h1 className='font-alata font-semibold'>2015 Track Record</h1>
              <ChevronDown />
            </div>
          </div>

        </div>




      </div>



      {/* Our Team */}

      <div className='mt-32 p-[2rem]'>
        <div className='w-3/4 mx-auto'>
          <h1 className='text-6xl font-alata font-bold mb-5 text-center'>Our Team</h1>
          <p className='font-alata text-gray-600 text-center'>Smart Vision for Consultancy and Development was incorporated in <br/> 2011 in Somalia.</p>

        </div>


        <div className='flex justify-around items-center gap-5 mt-20'>

          <div className='relative w-44 h-44 rounded-full bg-red-500 flex justify-center items-center p-3 after:content-[""] after:w-[300px] after:h-60 after:bg-white after:shadow-2xl after:absolute after:top-1/2 after:z-10 after:rounded-lg'>
            <img className='w-full h-full rounded-full z-30 object-cover' src={team1Image} alt="" />

            <div className='absolute z-40 -bottom-28 w-full'>
              <h1 className='text-xl font-bold font-alata text-center'>Ismail Aden Haibe</h1>
              <p className='text-sm font-alata text-center'>Cheif Executive Officer</p>
            
              <div className='mt-3 flex items-center gap-3 justify-center'>
                <img className='w-8' src={facebookfImage} alt="" />
                <img className='w-8' src={facebookfImage} alt="" />
                <img className='w-8' src={facebookfImage} alt="" />
              </div>
            </div>


          </div>

          <div className='relative w-44 h-44 rounded-full bg-red-500 flex justify-center items-center p-3 after:content-[""] after:w-[300px] after:h-60 after:bg-white after:shadow-2xl after:absolute after:top-1/2 after:z-10 after:rounded-lg'>
            <img className='w-full h-full rounded-full z-30 object-cover' src={team2Image} alt="" />

            <div className='absolute z-40 -bottom-28 w-full'>
              <h1 className='text-xl font-bold font-alata text-center'>Ismail Aden Haibe</h1>
              <p className='text-sm font-alata text-center'>Cheif Executive Officer</p>
            
              <div className='mt-3 flex items-center gap-3 justify-center'>
                <img className='w-8' src={facebookfImage} alt="" />
                <img className='w-8' src={facebookfImage} alt="" />
                <img className='w-8' src={facebookfImage} alt="" />
              </div>
            </div>


          </div>

          <div className='relative w-44 h-44 rounded-full bg-red-500 flex justify-center items-center p-3 after:content-[""] after:w-[300px] after:h-60 after:bg-white after:shadow-2xl after:absolute after:top-1/2 after:z-10 after:rounded-lg'>
            <img className='w-full h-full rounded-full z-30' src={team3Image} alt="" />

            <div className='absolute z-40 -bottom-28 w-full'>
              <h1 className='text-xl font-bold font-alata text-center'>Ismail Aden Haibe</h1>
              <p className='text-sm font-alata text-center'>Cheif Executive Officer</p>
            
              <div className='mt-3 flex items-center gap-3 justify-center'>
                <img className='w-8' src={facebookfImage} alt="" />
                <img className='w-8' src={facebookfImage} alt="" />
                <img className='w-8' src={facebookfImage} alt="" />
              </div>
            </div>


          </div>

          <div className='relative w-44 h-44 rounded-full bg-red-500 flex justify-center items-center p-3 after:content-[""] after:w-[300px] after:h-60 after:bg-white after:shadow-2xl after:absolute after:top-1/2 after:z-10 after:rounded-lg'>
            <img className='w-full h-full rounded-full z-30 object-cover' src={team4Image} alt="" />

            <div className='absolute z-40 -bottom-28 w-full'>
              <h1 className='text-xl font-bold font-alata text-center'>Ismail Aden Haibe</h1>
              <p className='text-sm font-alata text-center'>Cheif Executive Officer</p>
            
              <div className='mt-3 flex items-center gap-3 justify-center'>
                <img className='w-8' src={facebookfImage} alt="" />
                <img className='w-8' src={facebookfImage} alt="" />
                <img className='w-8' src={facebookfImage} alt="" />
              </div>
            </div>


          </div>



        </div>
      </div>



      {/* Our Clients */}
      <div style={{marginTop: "300px"}} className='p-[2rem]'>
        <div className='w-1/2 mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-3 font-alata'>Our Services</h1>
        </div>

        <div className='mt-14'>
          <div className='flex flex-row gap-8 justify-between'>
            <img className='w-16 h-16 object-contain' src={unicef_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={adesoImage} alt="" />
            <img className='w-16 h-16 object-contain' src={drc_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={somail_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={swa_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={lio_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={grt_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={kon_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={pun_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={practical_action_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={sm_logo} alt="" />
            
          </div>

          <div className='flex flex-row gap-8 justify-between mt-4'>
            <img className='w-16 h-16 object-contain' src={unicef_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={adesoImage} alt="" />
            <img className='w-16 h-16 object-contain' src={drc_logo} alt="" />
            <img className='w-44 object-contain' src={hand_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={swa_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={lio_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={grt_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={kon_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={pun_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={practical_action_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={sm_logo} alt="" />
            
          </div>

          <div className='flex flex-row gap-8 justify-center mt-4'>
            <img className='w-16 h-16 object-contain' src={swa_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={lio_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={grt_logo} alt="" />
            <img className='w-16 h-16 object-contain' src={kon_logo} alt="" />

            
          </div>


        </div>

      </div>


      {/* testimonial */}
      <div className='mt-32 p-[2rem]'>
        <div className='mx-auto'>
          <h1 className='text-6xl font-alata font-bold mb-8 text-center'>Testimonial</h1>

          <div className='flex flex-row gap-3 items-center'>
            <div className='w-full h-1 bg-gray-500'></div>
            <img className='w-10' src={qouteImage} alt="" />
            <div className='w-full h-1 bg-gray-500'></div>
          </div>

          <p className='text-sm font-alata text-center mt-5'>
          Kindly do not hesitate to enter into collaboration with Smart Vision for <br /> similar activities, as UNICEF was very pleased and satisfied by their work
          </p>

        </div>

        <div className='mt-16 flex flex-row justify-center items-center gap-8'>
          <img className='w-20 h-20 rounded-full object-contain border border-[#441355] ' src={unicef_logo} alt="" />
          <img className='w-20 h-20 rounded-full object-contain border border-[#441355] ' src={unicef_logo} alt="" />
          <img className='w-20 h-20 rounded-full object-contain border border-[#441355] ' src={unicef_logo} alt="" />
          <img className='w-20 h-20 rounded-full object-contain border border-[#441355] ' src={unicef_logo} alt="" />
          <img className='w-32 h-32 rounded-full object-contain border border-[#441355] ' src={unicef_logo} alt="" />
          <img className='w-20 h-20 rounded-full object-contain border border-[#441355] ' src={unicef_logo} alt="" />
          <img className='w-20 h-20 rounded-full object-contain border border-[#441355] ' src={unicef_logo} alt="" />
          <img className='w-20 h-20 rounded-full object-contain border border-[#441355] ' src={unicef_logo} alt="" />
          <img className='w-20 h-20 rounded-full object-contain border border-[#441355] ' src={unicef_logo} alt="" />
        </div>

        <div className='text-center mt-3'>
            <h1 className='text-xl font-alata font-semibold'>Hanna Yoshimoto</h1>
            <p className='font-alata'>UNICEF</p>
        </div>

        <div className='w-full h-1 bg-gray-500 mt-12'></div>
      </div>


      <div className='mt-20'>
        <Footer />
      </div>



    </React.Fragment>
  )
}

export default HomePage
