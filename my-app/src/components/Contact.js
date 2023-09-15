import React from 'react'

const Contact = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#27272a] text-gray-300 flex justify-center items-center py-4'>
        <form method='POST' action='https://getform.io/f/f6401556-6fe5-4e07-ad5b-bc049237aeb4' className='flex flex-col max-w-[600px]'>
            <div className='pb-8'>
                <p className='text-4xl text-white border-b-4 inline'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or send me an email -omss1336@gmail.com</p>
            </div>
            <input className='bg-[#dadadd] p-2  text-black' type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#dadadd]  text-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#dadadd] p-2 g text-black' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#dadadd] hover:border-[#dadadd] hover:text-[#27272a] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>

            
        </form>
      
    </div>
  )
}

export default Contact
