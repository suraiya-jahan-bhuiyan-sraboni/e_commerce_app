import React, { useState } from 'react'
import { BiReceipt } from 'react-icons/bi';
import Breadcrumbs from './../components/Breadcrumbs';
import { Link } from 'react-router';

const Cart = () => {
    const [quantities, setQuantities] = useState({
        monitor: 1,
        gamepad: 1,
    });

    const handleQuantityChange = (item, value) => {
        const newValue = Math.max(0, Math.min(100, Number(value)));
        setQuantities((prev) => ({ ...prev, [item]: newValue }));
      };
    
    return (
        <div className='min-h-screen'>
            <div className="p-8 max-w-6xl mx-auto">
                <Breadcrumbs />
                <div className="overflow-x-auto">
                    <table className="table w-full border-separate border-spacing-y-4">
                        <thead className='shadow-xs '>
                            <tr >
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className='shadow-xs'>
                                <td className="flex items-center gap-3 flex-wrap">
                                    <img
                                        src="src/assets/monitor.png"
                                        alt="LCD Monitor"
                                        className="w-12 h-12 rounded"
                                    />
                                    <span className="font-semibold">LCD Monitor</span>
                                </td>
                                <td>$650</td>
                                <td>
                                    <input
                                        type="number"
                                        value={quantities.monitor}
                                        onChange={(e) =>
                                            handleQuantityChange("monitor", e.target.value)
                                        }
                                        className="input input-bordered w-20 text-center"
                                    />
                                </td>
                                <td>$650</td>
                            </tr>
                            <tr className='shadow-xs'>
                                <td className="flex items-center gap-3 flex-wrap">
                                    <img
                                        src="src/assets/game-player 1.png"
                                        alt="H1 Gamepad"
                                        className="w-12 h-12 rounded"
                                    />
                                    <span className="font-semibold">H1 Gamepad</span>
                                </td>
                                <td>$550</td>
                                <td>
                                    <input
                                        type="number"
                                        value={quantities.gamepad}
                                        onChange={(e) =>
                                            handleQuantityChange("gamepad", e.target.value)
                                        }
                                        className="input input-bordered w-20 text-center"
                                    />
                                </td>
                                <td>$1100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between flex-wrap gap-2 my-10">
                    <button className="btn btn-outline px-10">Return To Shop</button>
                    <button className="btn btn-outline px-10">Update Cart</button>
                </div>
                <div className="flex justify-between items-start mt-6 flex-wrap gap-4">
                        <div className="flex justify-between items-start gap-2">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                className="input input-bordered"
                            />
                            <button className="btn bg-red-500 hover:bg-red-600 text-white px-10 ">
                                Apply Coupn
                            </button>
                        </div>

                    <div className="w-full max-w-sm  border p-4 rounded-lg shadow-md">
                        <div className="space-y-2 py-4">
                            <h2 className="text-lg font-semibold">Cart Total</h2>
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>$1750</span>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between font-bold border-t pt-2">
                                <span>Total:</span>
                                <span>$1750</span>
                            </div>
                            <Link to="/checkout" className="btn w-full bg-red-500 hover:bg-red-600 text-white py-3">
                                Proceed to checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart