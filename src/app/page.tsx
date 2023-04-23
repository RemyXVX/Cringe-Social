import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
    <main className="py-4 px-48">
      <h1>Home</h1>
      <Link className="bg-teal-700 text-black font-medium py-2 px-4 rounded-md" href={"./components/about"}>Go to about</Link>
    </main>
  )
}
