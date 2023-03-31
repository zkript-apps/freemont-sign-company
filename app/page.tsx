import Clients from "@/components/pages/home/Clients";
import FeaturedWorks from "@/components/pages/home/FeaturedWorks";
import Hero from "@/components/pages/home/Hero";
import Mission from "@/components/pages/home/Mission";
import Services from "@/components/pages/home/Services";

export default function Home() {
  return (
    <>
      <Hero/>
      <Mission/>
      <Services/>
      <FeaturedWorks/>
      <Clients/>
    </>
  )
}
