import { MenuItems, OrderItem } from "../types";

export type OrderActions =
    { type: 'add-item', payload: {item: MenuItems} } |
    { type: 'remove-item', payload: {id: MenuItems['id']} } |
    { type: 'storage-order' } |
    { type: 'set-tip', payload: {tip: number} }

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState : OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState,
    actions: OrderActions
) => {

    if (actions.type === 'add-item') {

        const itemExist = state.order.find(orderItem => orderItem.id === actions.payload.item.id)
        let updatedOrder : OrderItem[]

        if (itemExist) {
            const newUpdatedOrder = state.order.map(orderItem => orderItem.id === actions.payload.item.id ?
                {...orderItem, quantity: orderItem.quantity + 1} : orderItem
            )
            updatedOrder = newUpdatedOrder
        } else {
            const newItem = {...actions.payload.item, quantity: 1}
            updatedOrder = [...state.order, newItem]
        }

        return {
            ...state,
            order: updatedOrder
        }
    }

    if (actions.type === 'remove-item') {

        const orderUpdated = (state.order.filter(orderItem => orderItem.id !== actions.payload.id))

        return {
            ...state,
            order: orderUpdated
        }
    }

    if (actions.type === 'storage-order') {
        return {
            order: [],
            tip: 0
        }
    }

    if (actions.type === 'set-tip') {

        const tip = actions.payload.tip

        return {
            ...state,
            tip
        }
    }

    return {
        ...state
    }
}