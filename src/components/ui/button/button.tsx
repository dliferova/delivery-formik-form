interface ButtonProps {
  title: string
}

const Button = ({ title }: ButtonProps) => {
  return (
    <button className="button-ordinary transition-custom">
      <span>{title}</span>
    </button>
  )
}

export default Button
