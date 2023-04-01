"use client"
import React from 'react'
import Hero from '@/components/Hero';
import Images from '@/components/Images';
import { faBinoculars, faComputer, faPaintBrush, faRulerCombined, faSignHanging } from '@fortawesome/free-solid-svg-icons';
import Icons from '@/components/Icons';

const Content = () => {
  const iconText = [
    {
      icon: faPaintBrush,
      text: "Exterior & Interior"
    },
    {
      icon: faComputer,
      text: "Digital"
    },
    {
      icon: faPaintBrush,
      text: "Graphic Style"
    },
    {
      icon: faRulerCombined,
      text: "Architectural & Recovery"
    },
    {
      icon: faBinoculars,
      text: "Wayfinding"
    },
    {
      icon: faSignHanging,
      text: "Pylon Signage & Conversions"
    },
  ];
  const heroDesc = "Here’s what we know: People will form an impression of your business based on a host of factors. One of those is the image you present with your signage. Often the first point of contact you have with potential customers, your signage speaks volumes about you and your brand. Helping our clients build brand image and communicate brand values has been our priority for more than 80 years now. From local projects to nationwide roll outs, we bring a level of custom craftsmanship, quality fabrication, creativity and collaborative customer service to every job that we’re confident you’ll find is unmatched.";

  return (
    <>
      <Hero smallTitle="Our Capabilities" title="Engraving" subTitle="Make an impression. First time. Every time." description={heroDesc} imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
      <Icons iconText={iconText}/>
      <Images imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
    </>
  )
}

export default Content