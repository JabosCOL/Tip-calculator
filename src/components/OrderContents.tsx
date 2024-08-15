import { Dispatch } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
import { OrderActions } from "../reducers/Order-reducer"

type OrderContentsProps = {
    order: OrderItem[]
    dispatch: Dispatch<OrderActions>
}

export default function OrderContents({ order, dispatch }: OrderContentsProps) {
    return (
        <div>
            <h2 className=" font-black text-4xl">Receipt</h2>
            <div className=" space-y-3 mt-10">
                        {order.map(orderItem => (
                            <div
                                className=" flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                                key={orderItem.id}
                            >
                                <div>
                                    <p className=" text-lg">
                                        {orderItem.name} - {formatCurrency(orderItem.price)}
                                    </p>
                                    <p className=" font-black">
                                        Quantity: {orderItem.quantity} - {formatCurrency(orderItem.price * orderItem.quantity)}
                                    </p>
                                </div>
                                <button
                                    className=" bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                    onClick={() => dispatch({type: 'remove-item', payload: {id: orderItem.id}})}
                                >
                                    X
                                </button>
                            </div>
                        ))}
            </div>
        </div>
    )
}
