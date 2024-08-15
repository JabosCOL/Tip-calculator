import { Dispatch } from "react"
import { MenuItems } from "../types"
import { OrderActions } from "../reducers/Order-reducer"

type MenuItemProps = {
    item: MenuItems
    dispatch: Dispatch<OrderActions>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button
        className=" border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg rounded-lg w-full flex justify-between"
        onClick={() => dispatch({type: 'add-item', payload : {item}})}
    >
        <p>{item.name}</p>
        <p className=" font-black">${item.price}</p>
    </button>
  )
}
