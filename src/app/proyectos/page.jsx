import ProjectCover from './components/ProjectCover'
import ProjectBody from './components/ProjectBody/ProjectBody'
import { Suspense } from 'react'
import Loading from './loading'

export default async function Projects () {
  return (
    <section className='min-w-[200px] h-full'>
      <ProjectCover />
      <Suspense fallback={<Loading className='h-screen' />}>
        <ProjectBody />
      </Suspense>
    </section>
  )
}
