import React from 'react'

const SalesCustomer = () => {
    const data = [
        {
            id: "1",
            img: "src/assets/activeSeller.png",
            total: "10.5k",
            title: "Sallers active our site"
        },
        {
            id: "1",
            img: "src/assets/activeSeller.png",
            total: "33k",
            title: "Mpnthly products sales"
        },
        {
            id: "1",
            img: "src/assets/activeSeller.png",
            total: "45.5k",
            title: "Customer active in our site"
        },
        {
            id: "1",
            img: "src/assets/activeSeller.png",
            total: "25k",
            title: "Anual gross sale in our site"
        }
    ]
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 py-10 w-11/12 mx-auto '> {
            data.map((item) => (
                <div key={item.id} className='hover:bg-red-400 hover:text-white flex flex-col items-center justify-center text-center gap-4 border rounded-lg border-gray-400 p-10'>

                    <div className='w-20 h-20 p-1 bg-black rounded-full flex justify-center items-center border-gray-300 border-5'>
                        <img src={item.img} alt="serviceImage" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold'>{item.total}</h2>
                        <p className='text-xs'>{item.title}</p>
                    </div>

                </div>
            ))
        } </div>
    )
}

export default SalesCustomer