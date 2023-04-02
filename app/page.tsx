import Clients from "@/components/pages/Home/Clients";
import FeaturedWorks from "@/components/pages/Home/FeaturedWorks";
import Hero from "@/components/pages/Home/Hero";
import Mission from "@/components/pages/Home/Mission";
import Services from "@/components/pages/Home/Services";

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
