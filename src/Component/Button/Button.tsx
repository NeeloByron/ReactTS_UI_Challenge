import type React from "react"
import style from '@/Component/Button/Button.module.css'

type buttonProp = {
     btnText: string,
     style?: React.CSSProperties,
}

export const Button: React.FC<buttonProp>= ({btnText, style}) => {
  return (
    <button style={style}>
        {btnText}
    </button>
  )
}

export default Button