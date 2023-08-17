export default function ProjectGalleryLoading () {
  const data = Array(10).fill(null)
  return (
    <section className='w-full bg-black   grid  grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-1 p-1'>
      {data.map((data, index) => (
        <div key={index} className='bg-neutral-950 w-full relative aspect-square animate-[pulse_1s_ease-in-out_infinite] ' />
      ))}
    </section>
  )
}
