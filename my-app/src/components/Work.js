import React from 'react'
import mytinerary from './assets/mytinerary.jpg';
import petshop from './assets/petshop.JPG';
import tesla from './assets/cybertruck.avif'


const Work = () => {
  return (
        <div name='work' className='w-full min-h-screen bg-[#27272a] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='flex flex-col justify-center items-center w-full h-full pt-8'>
                    <p className='text-4xl mt-5 text-white border-b-4 inline'>Work</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 px-5'> {/*gap se usa para controlar el espacio entre los elementos dentro de un contenedor cuadricula*/}
                <div style={{backgroundImage:`url(${mytinerary})`}}
                 className='shadow-lg shadow-[#202022] group container flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-white tracking-wider'>
                            <p>My Tinerary</p>
                            <p>React Js Application</p>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/orlymariela/My-Tineray'>
                                <button className='text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 '>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${petshop})`}}
                className='shadow-lg shadow-[#202022] group container flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-white tracking-wider'>
                            <p>Petshop</p>
                            <p>Js App Web</p>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/orlymariela/petshop-master'>
                                <button className='text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 '>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`}}
                className='shadow-lg shadow-[#202022] group container flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-white tracking-wider'>
                            <p>Netflix</p>
                            <p>React Js Application</p>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/orlymariela/Netflix'>
                                <button className='text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 '>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${tesla})`}}
                className='shadow-lg shadow-[#202022] group container flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-white tracking-wider'>
                            <p>Tesla</p>
                            <p>Landing Page</p>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/orlymariela/tesla'>
                                <button className='text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 '>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div >
  )
}

export default Work

