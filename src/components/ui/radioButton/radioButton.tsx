const RadioButton = ({
  value,
  name,
  inputId,
  label,
  checked,
  onChange,
}: {
  value: string
  name: string
  inputId: string
  label: string
  checked: boolean
  onChange: (e: any) => void
}) => {
  return (
    <>
      <input
        className="absolute w-[1px] h-[1px] m-[-1] outline-none"
        style={{ clip: "rect(0 0 0 0)" }}
        id={inputId}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="text-s" htmlFor={inputId}>
        {label}
      </label>
    </>
  )
}

export default RadioButton
