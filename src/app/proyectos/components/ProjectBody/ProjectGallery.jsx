import Image from 'next/image'
import Link from 'next/link'
import useProjectContext from '../../../../contexs/ProjectContext'

export default function ProjectGallery ({ selected }) {
  const { projects } = useProjectContext()
  return (
    <section className='w-full h-full   grid  grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-1 p-1 bg-primaryColor'>
      {projects?.map((item) => (
        <div
          key={item.id}
          style={{ backgroundImage: `url(${item.featured_image})` }}
          className='w-full overflow-hidden relative saturate-0  aspect-square  group hover:saturate-100 bg-cover bg-center bg-no-repeat  animate-scaleProjectGallery '
        >
          <Link
            href={`/proyectos/${item.url}`}
            style={{ backgroundImage: `url(${item.featured_image})` }}
            className='cursor-pointer'
          >
            <div className='absolute h-full w-full bg-black/[85%] flex items-center group-hover:opacity-0  duration-[350ms] ease-[cubic-bezier(.42,-0.01,.47,1)]'>
              <Image
                className='w-full h-auto'
                src={item.sketch_image}
                width={600}
                height={600}
                alt={item.title_es}
              />

              {/* <img
                    src={item.sketch_image}
                    className="   w-full h-auto "
                    alt=""
                  /> */}
              <div className='w-fit absolute bottom-0 group-hover:-bottom-10 duration-[350ms] ease-[cubic-bezier(.42,-0.01,.47,1)]  text-center bg-black p-3'>
                <h3 className='text-white text-[.55em] sm:text-xs lg:text-[.95em] 2xl:text-[.8em] font-manrope font-bold -tracking-tight'>
                  {item.title_es}
                </h3>
              </div>
            </div>
          </Link>
          <div
            className={`bg-neutral-950 w-full h-full absolute ${
              item.category !== selected && selected !== 'Todo'
                ? 'opacity-100 duration-300 z-10'
                : 'opacity-0 -z-10 duration-300'
            }`}
          />
        </div>
      ))}
    </section>
  )
}
