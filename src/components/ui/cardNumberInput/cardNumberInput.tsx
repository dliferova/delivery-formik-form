import React, { ChangeEvent, useRef, useState } from "react"

const CardNumberInput: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string[]>(["", "", "", ""])
  const inputRefs = useRef<HTMLInputElement[]>([])

  const handleInputChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      const updatedCardNumber = [...cardNumber]
      updatedCardNumber[index] = value.slice(0, 4)
      setCardNumber(updatedCardNumber)

      if (value.length === 4 && index < 3 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus()
      }
    }
  }

  return (
    <>
      <p className="label-text">Номер карты</p>
      <div className="flex flex-row w-[484px]">
        {cardNumber.map((part, index) => (
          <input
            className="input mr-[8px] last-of-type:mr-[0]"
            key={index}
            type="text"
            value={part}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(index, e.target.value)
            }
            maxLength={4}
            ref={(input) => input && (inputRefs.current[index] = input)}
          />
        ))}
      </div>
    </>
  )
}

export default CardNumberInput
