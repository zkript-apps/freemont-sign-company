"use client"
import React from 'react'
import Hero from '@/components/Hero';
import Images from '@/components/Images';
import TextImage from '@/components/TextImage';
import { faFlag, faHouseChimney, faMonument, faSignHanging, faSignsPost, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import Icons from '@/components/Icons';

const Content = () => {
  const iconText = [
    {
      icon: faSignHanging,
      text: "Channel Letters"
    },
    {
      icon: faMonument,
      text: "Monument Sign"
    },
    {
      icon: faFlag,
      text: "Pole Signs"
    },
    {
      icon: faWarehouse,
      text: "Cabinet Signs"
    },
    {
      icon: faHouseChimney,
      text: "Vynil Indoor and Outdoor"
    },
    {
      icon: faSignsPost,
      text: "Awning"
    },
  ];
  const heroDesc = "At Fremont Sign Company, quality is the goal of the installation process. The signs are being installed with all product specific requirements in mind. We make sure that the sign is well placed, visible and durable. Our installation teams are well organized and very knowledgeable. Rich experience is an integral part of our team-building process. Installing a sign is part of the process of creating unique signage that stands out. We make sure that the signs are installed free of defects and looking great. Eye-catching signs send a strong message to the audience, and when properly installed, they can support the business goals of any organization.";
  const channelLettersDesc = [
    "Channel letters are custom-made metal or plastic letters commonly used in exterior signage on public and commercial buildings, and often internally illuminated. Unlit three dimensional letters that are applied to sign panels or monuments are usually referred to as dimensional letters.",
    "Channel letters may be flush mounted (attached directly to the building facade), or they may be mounted on a raceway or wireway. A raceway is a rectangular mounting structure which serves as both a container for the sign’s electrical components (such as a power supply) and a mounting structure.",
    "A wireway also serves as a mounting structure but typically contains only wiring. It is thinner and broader than a raceway, and may also be used as a backer panel for the channel letter set.",
    "Face-lit letters may also be mounted so they rest on the top the building surface with a bottom and top rail supported by metal arms.",
  ];
  const monumentLettersDesc = [
    "A monument sign is a freestanding sign that is low to the ground. Often, these signs contain elements of masonry, but not always. They may also be crafted from foam that replicates the look of masonry, and few people can tell the difference.",
    "With a monument sign, you can control both the signage and the structure itself. KC Sign & Awnings offers a variety of styles for custom monument signs, so you can mix and match to your heart’s desire.",
    "We pre-assemble all the letters on the sign for you. Installing the sign is very simple with just two holes to dig and two posts to set. See instructions here.",
    "If you choose a lighted monument signs, keep in mind that you’ll need an electrical junction at the sign location. We will provide the power supply (transformer) needed to power the low voltage LEDs. Typically the electrical is run to a concrete pad footing for the sign.",
  ];
  const poleSignsDesc = [
    "Pole signs are promotional displays seen mounted to poles in locations varying from parking lots, gas stations, parks, schools and more. Typically seen in exterior applications, they’re incredibly easy to install, inexpensive to purchase – and most importantly – extremely resilient and visible over great distances.",
    "There are two varieties of pole signs (illuminated pole signs and non-illuminated) which serve different purposes and require different levels of installation. NGS Printing specializes in non-illuminated pole signs that are digital or screen printed for permanent and temporary uses. Whether you need pole signs for placement along highly trafficked roads, in parking lots, elsewhere outside of your business, for interior use or as other types of signage, NGS Printing has exactly what you need.",
    "Sporting events, shopping centers and department stores located in suburban areas that want to add a marketing push in the parking lot will find that pole signage is the most economical signage option for a temporary application.",
  ];
  const cabinetSignsDesc = [
    "Cabinet signs, also referred to as wall signs or box signs, are internally illuminated signs, typically mounted to a storefront wall, though they can also be freestanding as a monument or pole sign. Giving visibility to businesses both day and night, cabinet signs are known for their durability and versatility.",
    "Cabinet signs are most commonly manufactured using extruded aluminum components that are welded together, providing a strong frame for polycarbonate or impact-resistant acrylic sign faces. While many cabinet signs are rectangular, nearly any shape can be achieved, giving business owners the option to fully customize their signage in order to best attract customers. Commercial landlords appreciate the flexibility of cabinet signs with the option to replace a sign’s face for a new tenant without needing to replace the entire structure.",
    "Piedmont Plastics stocks both acrylic and polycarbonate for cabinet sign faces in a variety of colors, sizes, and thicknesses, and can also provide aluminum and LEDs.",
  ];
  const vinylDesc = [
    "The difference between indoor and outdoor banners may not be so obvious to some. Take a look at what makes them special and some tips for your next one.",
    "Banners are very popular products because they fit various purposes. From small exhibitions to large gatherings, banners are easy to spot and there’s a lot of information that can be displayed on them.",
    "Before you get to banner printing, there’s a few elements to keep in mind design-wise. For example:",
    "Font Type: Use a clean font that can be read from afar.",
    "Color Palette: Choose amicable ‘easy to read’ colors, making smart element distribution, and",
    "Copy: Go for short and sweet -concise information.",
    "It’s very important to think about the intended banner location before choosing a final design. For example, if you need an outdoor banner and choose light colors for it, chances are it will be hard to read in sunlight.",
  ];
  const ledDesc = [
    "A new fixed or retractable awning can change your deck or patio into an enjoyable open-air gathering place for friends and family. Awnings are a simple tool that can protect yourself and your furniture from harmful UV rays while supplying a relief from the heat.",
    "Installing an awning is a great way to enjoy the outdoors on hot a day. Awnings can provide shade that is up to 20 degrees lower than the direct sun. The additional shade from an awning will also help keep your home cooler lowering home energy costs. But they can be tricky to install.",
    "Drilling a hole into the exterior of your home is scary and difficult. Trying to follow installation directions and figuring out where every screw or bracket go can be even more daunting. That’s where we can lend a hand. Mr. Handyman’s fully insured and highly qualified professionals will install your awing so you can have the peace of mind that it’s done right. While we’re there, let us know if you have other projects around the house, we can help you with. Our home improvement professionals can do everything from carpentry to furniture assembly.",
  ];
  return (
    <>
      <Hero smallTitle="Our Capabilities" title="Installation" subTitle="Clean, professional sign installation process." description={heroDesc} imagesNames={["installation.png", "installation-2.png", "installation-3.png", "installation-4.png","installation-5.png"]} />
      <Icons iconText={iconText}/>
      <Images imagesNames={["installation.png", "installation-2.png", "installation-3.png", "installation-4.png","installation-4.png"]} />
      <TextImage id="channel-letters" isImageLeft isBgGray title={["Channel", "Letters"]} description={channelLettersDesc} imageName="installation.png" />
      <TextImage id="monument-signs" title={["Monument", "Signs"]} description={monumentLettersDesc} imageName="installation-2.png" />
      <TextImage id="pole-signs" isImageLeft isBgGray title={["Pole", "Signs"]} description={poleSignsDesc} imageName="installation-4.png" />
      <TextImage id="cabinet-signs" title={["Cabinet", "Signs"]} description={cabinetSignsDesc} imageName="installation-5.png" />
      <TextImage id="vinyl-indoor-and-outdoor" isImageLeft isBgGray title={["Vinyl", "Indoor and Outdoor"]} description={vinylDesc} imageName="installation-3.png" />
      <TextImage id="awning" title={["Awning", "Signs"]} description={ledDesc} imageName="installation.png" />
    </>
  )
}

export default Content