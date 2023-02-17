import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { createClient, groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'

const inter = Inter({ subsets: ['latin'] })

const clientConfig = {
  projectId: '0ep9en37',
  dataset: 'production',
  useCdn: false,
}

const client = createClient(clientConfig)

function getItems() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "item"]{
      name,
      _id,
      "slug": slug.current,
      "image": image.asset->url,
      content,
    }
  `)
}

export default async function Home() {
  const items = await getItems()
  return (
    <main className={styles.main}>

      

     {items.map((item: any) => (
        <div key={item.slug}>
          <h1>{item.name}</h1>
          <Image src={item.image} alt={item._id} width={200} height={200} />
          <PortableText value={item.content}/>
        </div>
      ))}
    </main> 
  )
}
