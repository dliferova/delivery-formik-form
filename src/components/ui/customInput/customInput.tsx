interface CustomInputProps {
  label?: string
  placeholder?: string
}

const CustomInput = ({ label, placeholder }: CustomInputProps) => {
  return (
    <div className="flex flex-col">
      {label !== undefined ? (
        <label className="text-sm mb-2">{label}</label>
      ) : (
        <></>
      )}
      <input
        placeholder={placeholder}
        className="border-2 border-slate-300 p-2 pl-5 mb-2 hover:border-sky-400"
      />
    </div>
  )
}

export default CustomInput
