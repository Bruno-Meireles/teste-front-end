
import { ButtonProps } from "../../../types/ui"
import '../Button/Button.scss'

const Button: React.FC<ButtonProps> = ({text, onClick}) => {
  return (
    <>
          <button className="custom-button" onClick={onClick}>
              {text}
      </button>
    </>
  )
}

export default Button
