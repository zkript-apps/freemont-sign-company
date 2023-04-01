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
  const heroDesc = "In order to open a business, there is a long list of business licenses and permits that a new establishment must obtain. But when you decided to become a business owner, you were up for the challenge. While a sign permit for your business may seem like a minor detail, when you think about how important it is in the grand scheme of your business design, it’s best to make sure it’s squared away.";
  return (
    <>
      <Hero smallTitle="Our Capabilities" title="Permits" subTitle="Business need to be legal all the time." description={heroDesc} imagesNames={["permits.png", "mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
      <Icons iconText={iconText}/>
      <Images imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
    </>
  )
}

export default Content