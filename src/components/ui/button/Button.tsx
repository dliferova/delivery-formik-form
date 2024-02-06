import styles from "./button.module.css"

interface ButtonProps {
  title: string
}

const Button = ({ title }: ButtonProps) => {
  return (
    <button className={styles.button}>
      <span>{title}</span>
    </button>
  )
}

export default Button
