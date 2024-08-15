import { Dispatch } from "react"
import { OrderActions } from "../reducers/Order-reducer"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipPercentageFormProps = {
    tip: number
    dispatch: Dispatch<OrderActions>
  }

export default function TipPercentageForm({tip, dispatch} : TipPercentageFormProps) {
  return (
    <div className="space-y-3">
        <h3 className="font-bold text-2xl">Tip</h3>
        <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input
                            type="radio"
                            name="tip"
                            id={tipOption.id}
                            value={tipOption.value}
                            onChange={ e => dispatch({type: 'set-tip', payload: {tip: +e.target.value}})}
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}
        </form>
    </div>
  )
}
