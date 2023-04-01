"use client"
import React from 'react'
import Hero from '@/components/Hero';
import Images from '@/components/Images';
import TextImage from '@/components/TextImage';
import { faCalendar, faLocation, faMagnifyingGlass, faNoteSticky, faSignHanging } from '@fortawesome/free-solid-svg-icons';
import Icons from '@/components/Icons';

const Content = () => {
  const iconText = [
    {
      icon: faCalendar,
      text: "Date Last Checked"
    },
    {
      icon: faSignHanging,
      text: "Signage Type"
    },
    {
      icon: faLocation,
      text: "Location"
    },
    {
      icon: faMagnifyingGlass,
      text: "Condition"
    },
    {
      icon: faNoteSticky,
      text: "Notes"
    },
  ];
  const heroDesc = "The exterior signs serve an incredibly important role in your business. With an eye-popping signage, you are sure that you are making your business more visible and more attractive to the potential customers including the passersby.  However, like all other strategic assets, you ought to make sure you are taking good care of the exterior signs. Therefore, it is important to make sure you are taking good care of the business signage.";
  const electricalDesc = [
    "Electical signs require periodic maintenance. Whether your sign is in need of just new light bulbs/relamping to any electrical work call on us today at (07) 3386 0248 for prompt professional service from changing light bulbs to ballast/transformer replacement to any electrical service issues.",
    "Give your existing sign a fresh look with a proper cleaning and get the brightness back to your illuminated sign. faces. Even unlighted signs need maintenance/cleaning too. We are here to accommodate your needs Flourescent tube signs, Neon signs, LED signs. Parking lot lighting. Cleaning/repainting/redecorating of sign faces.",
    "Signwriting Brisbane has the capabilities to provide service and repair to all types of signs. We have a fully equipped service and installation truck with 13mt Cherry Picker and stock all common sign and electrical components. We are licensed in most municipalities and meet or exceed local and nation electrical code requirements.",
  ];
  const neonDesc = [
    "Electical signs require periodic maintenance. Whether your sign is in need of just new light bulbs/relamping to any electrical work call on us today at 510-573-3162 for prompt professional service from changing light bulbs to ballast/transformer replacement to any electrical service issues.",
    "Give your existing sign a fresh look with a proper cleaning and get the brightness back to your illuminated sign. faces. Even unlighted signs need maintenance/cleaning too. We are here to accommodate your needs Flourescent tube signs, Neon signs, LED signs. Parking lot lighting. Cleaning/repainting/redecorating of sign faces.",
    "Signwriting Brisbane has the capabilities to provide service and repair to all types of signs. We have a fully equipped service and installation truck with 13mt Cherry Picker and stock all common sign and electrical components. We are licensed in most municipalities and meet or exceed local and nation electrical code requirements.",
  ];
  const cabinetDesc = [
    "Electical signs require periodic maintenance. Whether your sign is in need of just new light bulbs/relamping to any electrical work call on us today at 510-573-3162 for prompt professional service from changing light bulbs to ballast/transformer replacement to any electrical service issues.",
    "Give your existing sign a fresh look with a proper cleaning and get the brightness back to your illuminated sign. faces. Even unlighted signs need maintenance/cleaning too. We are here to accommodate your needs Flourescent tube signs, Neon signs, LED signs. Parking lot lighting. Cleaning/repainting/redecorating of sign faces.",
    "Signwriting Brisbane has the capabilities to provide service and repair to all types of signs. We have a fully equipped service and installation truck with 13mt Cherry Picker and stock all common sign and electrical components. We are licensed in most municipalities and meet or exceed local and nation electrical code requirements.",
  ];
  return (
    <>
      <Hero smallTitle="Our Capabilities" title="Maintenance" subTitle="Reputable Signage Maintenance Company" description={heroDesc} imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
      <Icons iconText={iconText}/>
      <Images imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
      <TextImage id="all-electrical-signs" isImageLeft isBgGray title={["All Electrical", "Signs"]} description={electricalDesc} imageName="mountain-works.png" />
      <TextImage id="neon" title={["Neon", "Signs"]} description={neonDesc} imageName="ds-works.png" />
      <TextImage id="sign-cabinets-and-lighting" isImageLeft isBgGray title={["Sign Cabinet and", "Lighting"]} description={cabinetDesc} imageName="mountain-works.png" />
    </>
  )
}

export default Content