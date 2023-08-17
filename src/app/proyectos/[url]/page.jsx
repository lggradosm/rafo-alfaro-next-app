'use client'
import { useParams } from 'next/navigation'
export default function DetailProject () {
  const { url } = useParams()
  return (
    <section>
      <head>
        <meta property='og:title' content='proyecto' />
        <meta property='og:url' content='www.google.com' />
        <meta property='og:type' content='article' />
        <meta property='og:description' content='this is a description' />
      </head>
      <section className='mt-navbar'>{url}</section>
    </section>
  )
}
