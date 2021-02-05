import Button from '@/atoms/Button/Button'
import Head from 'next/head'

export default function Home() {
   return (
      <div>
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Button />
      </div>
   )
}
