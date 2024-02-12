import React, { useState, useRef, ChangeEvent } from "react"

const CardInput: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string[]>(["", "", "", ""])
  const inputRefs = useRef<HTMLInputElement[]>([])

  const handleInputChange = (index: number, value: string) => {
    // Это регулярное выражение /^\d*$/ проверяет,
    // что введенные символы являются только цифрами (0-9)
    // и что строка полностью состоит из цифр.
    if (/^\d*$/.test(value)) {
      const updatedCardNumber = [...cardNumber]
      updatedCardNumber[index] = value.slice(0, 4)
      setCardNumber(updatedCardNumber)

      // Проверяем, если введено 4 цифры, то фокусируем следующий инпут
      if (value.length === 4 && index < 3 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus()
      }
    }
  }

  return (
    <>
      <p className="text-zinc-500 mb-[12px]">Номер карты</p>
      <div className="flex flex-row w-[484px]">
        {cardNumber.map((part, index) => (
          <input
            className="border-2 border-slate-300 p-2 pl-5 mb-2 mr-[8px] hover:border-sky-400 w-[115px] last-of-type:mr-[0]"
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

export default CardInput
