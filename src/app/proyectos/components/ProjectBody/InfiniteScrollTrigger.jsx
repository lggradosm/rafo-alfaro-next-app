import React, { useEffect, useRef, useState } from 'react'
import useProjectContext from '../../../../contexs/ProjectContext'

export default function InfiniteScrollTrigger () {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const triggerRef = useRef(null)
  const { nextPage } = useProjectContext()
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    })
    if (triggerRef) {
      observer.observe(triggerRef?.current)
      return () => observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (isIntersecting) {
      nextPage()
    }
  }, [isIntersecting])
  return (
    <section className='w-full h-10 ' ref={triggerRef} />
  )
}
