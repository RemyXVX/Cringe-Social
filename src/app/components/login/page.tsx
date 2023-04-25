import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

const Login = () => {
  return(
    <main className="py-4 px-48">
      <h1>login</h1>
      <hr />
      <br></br>
      <Link className="bg-teal-700 text-black font-medium py-2 px-4 rounded-md" href={"/"}>Home</Link>
    </main>
  )
}

export default Login;
