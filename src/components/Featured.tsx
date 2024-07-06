import React from 'react'

const Featured = () => {
  return (
    <section className='mt-20'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2'>
            <div className="w-full h-[35rem] bg-[url('/cars.jpg')] bg-cover bg-center"></div>
            <div className="w-full h-[35rem] bg-[url('/clean.jpg')] bg-cover bg-center"></div>
            <div className="w-full h-[35rem] bg-[url('/finish.jpg')] bg-cover bg-center"></div>
            <div className="w-full h-[35rem] bg-[url('/customer.jpg')] bg-cover bg-center"></div>
        </div>
    </section>
  )
}

export default Featured