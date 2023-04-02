import Clients from "@/components/pages/front/Clients";
import FeaturedWorks from "@/components/pages/front/FeaturedWorks";
import Hero from "@/components/pages/front/Hero";
import Mission from "@/components/pages/front/Mission";
import Services from "@/components/pages/front/Services";

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
