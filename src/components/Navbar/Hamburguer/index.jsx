import React, { useEffect, useState } from 'react'
import './hamburguer.css'

export default function Hamburguer ({ changeColorWhen, visbility, trigger }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (visbility) setActive(true)
  }, [visbility])

  const toggle = () => {
    if (active && visbility) return 'open'
    if (active && !visbility) return 'close'
    return ''
  }

  return (
    <div
      className={`hamburguer z-50 ${
        changeColorWhen || visbility ? 'active' : ''
      }  ${toggle()}`}
      onClick={() => trigger()}
    >
      <span className='lines' />
    </div>
  )
}
