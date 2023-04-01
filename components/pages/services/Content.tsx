"use client"
import React from 'react'
import Hero from './Hero';
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
  const heroDesc = "We provide Signboard services related to Sign Designing, Building Signs, Outdoor and Indoor Sign, Construction signs, Sign Fabrication, Industrial Signage, Exhibition Stands, Display Stands, Digital Signage, Commercial Signs, location sign, custom signs, led sign board, led sign backlit channel letters, Acrylic Signage, Acrylic Signboard, 2d/ 3D sign, 3D signboard, Alucobond Sign, Wood and MDF Sign, Vinyl Sign, Panaflex sign, Painted sign, Pavement Sign, Plastic Sign, (letter or engraved on Acrylic, HDPE, High Density signboard, Polyurethane, PVC,ETC), Wall graphics Outdoor, Channel Letter Sign, Decorative Sign, Neon signboard, reflector signboard, Street signboard, fabricated sign, shop signage, interior signs, message board, banners and stands, yard signs withstand, yard sign with frame, construction signs, wall panel signage, cabinet(light box)signage, wedding signage, magnetic signage, metal signage, backlight and front light, airport signage, barricade signs, POP/in-store signs, Office signs, factories signs, Restaurants signs, School Signs, reflector signboard, Travel and tours signage, Media signs, Traffic & warning sign, reflector signboard.";
  return (
    <>
      <Hero smallTitle="Our Capabilities" title="Services" subTitle="Quality is our Brand." description={heroDesc} imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
      <Icons iconText={iconText}/>
      <Images imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
    </>
  )
}

export default Content