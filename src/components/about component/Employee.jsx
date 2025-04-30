import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Employee = () => {
    const employe = [
        {
            id: "1",
            name: "Tom Cruise",
            img: "src/assets/image 46.png",
            position: "Founder & Chairman"
        },
        {
            id: "2",
            name: "Emma Watson",
            img: "src/assets/image 51.png",
            position: "Managing Director"
        },
        {
            id: "3",
            name: "Will Smith",
            img: "src/assets/image 47.png",
            position: "Product Designer"
        }
    ];
    return (
        <div className='w-11/12 mx-auto grid grid-cols-3  gap-6 py-20'>
            {
                employe.map((person) => {
                    return (
                        <div key={person.id} className='flex flex-col gap-2'>
                            <div className='flex w-full justify-end items-center '>
                                <img className='px-4 pt-4 w-90 h-90 rounded bg-gray-200 object-cover object-top' src={person.img} alt={person.name}/>
                            </div>
                            <h1 className='text-2xl font-semibold'>{person.name}</h1>
                            <p className='text-xs'>{person.position}</p>
                             <div className='flex justify-start text-lg items-center gap-2'>
                                        <CiTwitter className='text-[15px]' />
                                        <FaInstagram className='text-sm'/>
                                        <FaLinkedinIn className='text-xs' />
                                      </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Employee