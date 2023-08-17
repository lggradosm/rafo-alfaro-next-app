import React from 'react'
import Image from 'next/image'
import imageCover from '@assets/images/studio/home-nosotros.webp'
function ProjectCover () {
  return (
    <section className='w-full h-full'>
      <Image
        src={imageCover}
        alt='equipo de rafo alfaro estudio creativo'
        priority
        placeholder='blur'
      />
    </section>
  )
}

export default ProjectCover
