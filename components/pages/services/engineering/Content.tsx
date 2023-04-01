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
  const heroDesc = "When you think of signage engineering you might think of the structure of your outdoor sign or the design and manufacturing of your lighting fixtures.  However there’s much more to engineering that needs to be considered. Your outdoor signage needs to adhere to your local municipality’s ordinances and you must have all of the proper permits prior to installation.  The soil grade where the sign is to be installed needs to be evaluated for preparedness.  And the landscape surrounding your outdoor sign should conform to your sign’s visibility.";
  return (
    <>
      <Hero smallTitle="Our Capabilities" title="Engineering" subTitle="Signage Design and Manufactured In-house." description={heroDesc} imagesNames={["engineering.jpg", "mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
      <Icons iconText={iconText}/>
      <Images imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
    </>
  )
}

export default Content