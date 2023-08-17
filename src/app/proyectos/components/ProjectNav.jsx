function ProjectNav ({ selected, onclick }) {
  return (
    <section className='sticky top-[calc(var(--navbar-heigh))]  backdrop-blur-sm bg-black/80 z-10 p-2'>
      <nav>
        <ul className='flex  justify-between  gap-4   w-full md:w-2/5  '>
          <ProjectNavItem
            name='Todo'
            onClick={() => onclick('Todo')}
            selected={selected}
          />
          <ProjectNavItem
            name='Arquitectura'
            onClick={() => onclick('Arquitectura')}
            selected={selected}
          />
          <ProjectNavItem
            name='Interiorismo'
            onClick={() => onclick('Interiorismo')}
            selected={selected}
          />
          <ProjectNavItem
            name='Construcción'
            onClick={() => onclick('Construcción')}
            selected={selected}
          />
        </ul>
      </nav>
    </section>
  )
}

function ProjectNavItem ({ name, onClick, selected }) {
  return (
    <li
      onClick={() => onClick(name)}
      className={`p-3 font-bold cursor-pointer hover:brightness-75 relative  text-center w-full text-[.5em]  sm:text-[.75em]  2xl:text-[.7em] tracking-widest  uppercase
          ${
            selected === name
              ? '  text-white duration-200 block after:animate-underlineNavItem after:w-0 after:absolute after:block after:rounded-full  after:left-0 after:bottom-1  after:h-0.5 after:bg-white'
              : 'text-white duration-200'
          }`}
    >
      {name}
    </li>
  )
}

export default ProjectNav
