import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

const CheckOut = () => {
    return (
        <div className='min-h-screen'>
            <div className='w-11/12 mx-auto py-4'>
                <Breadcrumbs />
                <h1 className='text-2xl font-semibold pt-4'>Billing Details</h1>
            </div>

            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 '>
                <div className=' md:col-start-1 md:col-end-6 py-4'>
                    {/* billing address form */}
                    <form className='flex flex-col gap-4 pb-10'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-400' >First Name<span className='text-red-400'>*</span></label>
                            <input type="text" className='w-full bg-gray-100 p-2 rounded' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-400' >Company Name</label>
                            <input type="text" className='w-full bg-gray-100 p-2 rounded' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-400' >Street Address<span className='text-red-400'>*</span></label>
                            <input type="text" className='w-full bg-gray-100 p-2 rounded' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-400' >Apartment, floor, etc. (optional)</label>
                            <input type="text" className='w-full bg-gray-100 p-2 rounded' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-400' >Town/City<span className='text-red-400'>*</span></label>
                            <input type="text" className='w-full bg-gray-100 p-2 rounded' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-400' >Phone Number<span className='text-red-400'>*</span></label>
                            <input type="text" className='w-full bg-gray-100 p-2 rounded' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-400' >Email Address<span className='text-red-400'>*</span></label>
                            <input type="text" className='w-full bg-gray-100 p-2 rounded' required />
                        </div>
                        <div className=' flex gap-3 items-center justify-start'>
                            <input type="checkbox" className='accent-red-500' />
                            <label>Save this information for faster check-out next time</label>
                        </div>

                    </form>
                </div>

                <div className=' md:col-start-7 md:col-end-13 py-6'>
                    <div className="max-w-md mx-auto space-y-6 font-sans text-gray-800">
                        {/* Product List */}
                        <div className="space-y-4 py-6 flex flex-col  ">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img src="src/assets/monitor.png" alt="Gamepad" className="w-12 h-12 object-contain" />
                                    <span>LCD Monitor</span>
                                </div>
                                <span>$650</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img src="src/assets/game-player 1.png" alt="Monitor" className="w-12 h-12 object-contain" />
                                    <span>H1 Gamepad</span>
                                </div>
                                <span>$1100</span>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="space-y-2 border-t pt-4 text-sm">
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>$1750</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping:</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between font-semibold text-lg">
                                <span>Total:</span>
                                <span>$1750</span>
                            </div>

                        </div>

                        {/* Payment Options */}
                        <div className="space-y-3">
                            <label className="flex justify-between items-center gap-2">
                                <div className='flex gap-2 items-center'>
                                    <input type="radio" name="payment" className="accent-black" />
                                    <span>Bank</span>
                                </div>

                                <div className="flex gap-2 mt-2">
                                    <img src="src/assets/bkash.png" alt="bkash" className="w-12 h-6" />
                                    <img src="src/assets/visa.png" alt="visa" className="w-10 h-6" />
                                    <img src="src/assets/mastercard.png" alt="mastercard" className="w-10 h-6" />
                                    <img src="src/assets/nagad.png" alt="nagad" className="w-10 h-6" />
                                </div>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="payment" className="accent-black" defaultChecked />
                                <span>Cash on delivery</span>
                            </label>
                        </div>

                        {/* Coupon Code */}
                        <div className="flex justify-between items-start gap-2">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                className="input input-bordered"
                            />
                            <button className="btn bg-red-500 hover:bg-red-600 text-white px-10 py-5 ">
                                Apply Coupon
                            </button>
                        </div>

                        {/* Place Order */}
                        <button className="btn bg-red-500 text-white text-lg px-15 py-3 rounded">
                            Place Order
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CheckOut