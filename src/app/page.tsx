import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
    <main className="py-4 px-48">
      <h1>Home</h1>
      <Link href={"/dashboard"}>Go to dashboard</Link>
    </main>
  )
}
