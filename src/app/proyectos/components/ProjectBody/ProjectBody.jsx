'use client'

import InfiniteScrollTrigger from './InfiniteScrollTrigger'
import useProjectContext from '@/contexs/ProjectContext'
import ProjectGalleryLoading from './ProjectGalleryLoading'
const { useState } = require('react')
const { default: ProjectNav } = require('../ProjectNav')
const { default: ProjectGallery } = require('./ProjectGallery')

export default function ProjectBody () {
  const [active, setActive] = useState('Todo')
  const changeActiveFilter = (filter) => {
    setActive(filter)
  }
  const { loaded, activePagination } = useProjectContext()
  return (
    <section className='h-full relative'>
      <ProjectNav selected={active} onclick={changeActiveFilter} />
      <ProjectGallery selected={active} />
      {!loaded && <ProjectGalleryLoading />}
      {loaded && activePagination && <InfiniteScrollTrigger />}
      {loaded && !activePagination && <p>no hay mas proyectos</p>}
    </section>
  )
}
