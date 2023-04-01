import '../styles/globals.css'
import { Poppins } from 'next/font/google'
import MainNavigation from '@/components/MainNavigation';
import Footer from '@/components/Footer';
import { metaBuilder } from '@/helpers/metaBuilder';

const poppins = Poppins({ 
  weight: ['400','600','700','800'],
  subsets: ['latin'],
  display: 'swap'
});

export async function generateMetadata() {
  return metaBuilder({
    title: 'Fremont Sign Company',
    description: 'Serving Nation Wide Markets with Sign Design, Manufacturing and Project Management Excellence for over 15 years in Bay Area.',
  });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <link rel="icon" type="image/x-icon" href={`/fav.png`} />
      <body>
        <MainNavigation/>
          <div className="pt-16 md:pt-28">
            {children}
          </div>
        <Footer/>
      </body>
    </html>
  )
}
