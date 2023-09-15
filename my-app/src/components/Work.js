import React from 'react'
import mytinerary from './assets/mytinerary.jpg';
import petshop from './assets/petshop.JPG';

const Work = () => {
  return (
        <div name='work' className='w-full h-screen bg-[#27272a] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl text-white border-b-4 inline'>Work</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> {/*gap se usa para controlar el espacio entre los elementos dentro de un contenedor cuadricula*/}
                <div style={{backgroundImage:`url(${mytinerary})`}}
                className='shadow-lg shadow-[#202022] group container rounded-md flex justify-center items-center mx-auto content-div'>
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
                className='shadow-lg shadow-[#202022] group container rounded-md flex justify-center items-center mx-auto content-div'>
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
                <div style={{backgroundImage:`url(${mytinerary})`}}
                className='shadow-lg shadow-[#202022] group container rounded-md flex justify-center items-center mx-auto content-div'>
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
            </div>
        </div>
      
    </div >
  )
}

export default Work

