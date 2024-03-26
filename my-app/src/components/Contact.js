import React from 'react'

const Contact = () => {
  return (
    <>
      <div id='contact' className='w-full min-h-screen bg-[#27272a] text-gray-300 flex justify-center items-center py-8'>
        <form method='POST' action='https://getform.io/f/f6401556-6fe5-4e07-ad5b-bc049237aeb4' className='flex flex-col md:max-w-auto pt-9 px-5'>
          <div className='flex flex-col justify-center items-center pt-4'>
            <p className='text-4xl  text-white border-b-4 inline justify-center'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or send me an email:
              <a href='mailto:omss1336@gmail.com' className='font-bold text-[#F2910A]'>orly.frontdeveloper@gmail.com</a></p>
          </div>
          <input className='bg-[#dadadd] p-2  text-black' type='text' placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#dadadd]  text-black' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#dadadd] p-2 g text-black' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-[#F2910A] hover:border-[#F2910A] hover:text-[white] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      </div>
    </>
  )
}

export default Contact
