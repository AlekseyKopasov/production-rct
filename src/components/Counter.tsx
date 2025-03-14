import { useState } from "react"
import css from "./Counter.module.scss"

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return(
    <div>
      <h2>{ count }</h2 >
      <button className={css.btn} onClick={increment}>Increment</button>
    </div>
  )
} 