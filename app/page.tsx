import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400','700','800'],
  subsets: ['latin'],
  display: 'swap'
});

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline text-slate-600">
      Hello world!
    </h1>
  )
}
