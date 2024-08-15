import { Dispatch, useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/Order-reducer"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    dispatch: Dispatch<OrderActions>
}

export const OrderTotals = ({order,  tip, dispatch} : OrderTotalsProps) => {

    const subTotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, subTotalAmount])
    const totalAmount = useMemo(() => tipAmount + subTotalAmount, [tipAmount, subTotalAmount])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Total and tip</h2>
                <p>Sub-total due: <span className="font-bold">{formatCurrency(subTotalAmount)}</span></p>
                <p>Tip: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
                <p>Total due: <span className="font-bold">{formatCurrency(totalAmount)}</span></p>
            </div>

            <button
                className="w-full bg-black text-white p-3 rounded-lg disabled:bg-gray-600"
                onClick={() => dispatch({type: 'storage-order'})}
                disabled={totalAmount === 0}
            >
                Save Order
            </button>
        </>
    )
}
