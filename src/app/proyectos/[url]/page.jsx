import { getProjectByUrl } from '@services/projectService'

export async function generateMetadata ({ params }) {
  // read route params
  const res = await getProjectByUrl(params.url)
  const data = res.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
  const project = data[0]
  return {
    openGraph: {
      title: project.title_es,
      description: project.text_es,
      images: [
        {
          url: project.featured_image,
          width: 800,
          height: 600
        },
        {
          url: project.featured_image,
          width: 1800,
          height: 1600
        }
      ]
    }
  }
}

export default async function DetailProject ({ params }) {
  // const data = await getData(url)
  return (
    <section>
      <div className='mt-navbar '>{params.url}</div>
    </section>
  )
}
