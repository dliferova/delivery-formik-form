interface CustomInputProps {
  label?: string
  placeholder?: string
}

const CustomInput = ({ label, placeholder }: CustomInputProps) => {
  return (
    <div className="flex flex-col w-[100:]">
      {label !== undefined ? (
        <label className="text-zinc-500 mb-[12px]">{label}</label>
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
