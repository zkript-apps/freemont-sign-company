"use client"
import React from 'react'
import Hero from '@/components/Hero';
import Images from '@/components/Images';
import TextImage from '@/components/TextImage';
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
  const heroDesc = "We offer the complete solution from sign design through to installation. Fremont Sign Company has earned the regard of its long-standing customers by exhibiting consistently our dedication to client administration, development, and meticulousness. Your image and its acknowledgment are enormously imperative in the aggressive universe of retail and we guarantee consistency of use over an assortment of areas; from the high road to retail stop… inside and out! Fremont Sign Company & Graphic comprehend the significance of working with different experts like shop-fitters, modelers and inside fashioners to ensure your retail signs are of the most noteworthy determination and quality. Our signage portfolio showcases the huge variety of high-quality commercial & vehicle signage that we are capable of at Fremont Sign Company.";
  const channelDesc = [
    "Channel letters are custom-made metal or plastic letters commonly used in exterior signage on public and commercial buildings, and often internally illuminated. Unlit three dimensional letters that are applied to sign panels or monuments are usually referred to as dimensional letters.",
    "Channel letters may be flush mounted (attached directly to the building facade), or they may be mounted on a raceway or wireway. A raceway is a rectangular mounting structure which serves as both a container for the sign’s electrical components (such as a power supply) and a mounting structure.",
    "A wireway also serves as a mounting structure but typically contains only wiring. It is thinner and broader than a raceway, and may also be used as a backer panel for the channel letter set.",
    "Face-lit letters may also be mounted so they rest on the top the building surface with a bottom and top rail supported by metal arms.",
  ];
  const monumentDesc = [
    "A monument sign is a freestanding sign that is low to the ground. Often, these signs contain elements of masonry, but not always. They may also be crafted from foam that replicates the look of masonry, and few people can tell the difference.",
    "With a monument sign, you can control both the signage and the structure itself. KC Sign & Awnings offers a variety of styles for custom monument signs, so you can mix and match to your heart’s desire.",
    "We pre-assemble all the letters on the sign for you. Installing the sign is very simple with just two holes to dig and two posts to set. See instructions here.",
    "If you choose a lighted monument signs, keep in mind that you’ll need an electrical junction at the sign location. We will provide the power supply (transformer) needed to power the low voltage LEDs. Typically the electrical is run to a concrete pad footing for the sign.",
  ];
  const polyDesc = [
    "There is nothing more perfect than a material that is as versatile and professional as a polyethylene sign. Polyethylene plastic signs are durable and weather resistant and can be applied to may different surfaces and in many different ways. The plastic material is used to make signs for many different companies and for many different reasons. It is also a less expensive alternative to other materials on the market.",
    "Polyethylene signs are weather resistant in rain, shine, snow and more. It is resistant to chemicals and is thin enough to where it can be applied with a staple gun to wood and other soft surfaces. Although the material is only .055” thick, it still will not crack, peel or chip. The screen printed ink used on the polyethylene plastic signs are UV inks so that even the print will look like new for longer than just a couple weeks. Your signs will look brand new years down the road when properly taken care of.",
    "These sizes include poly signs that have square corners, round corners and even common special shapes such as octagon, circle, triangle and shield.",
  ];
  const lightBoxDesc = [
    "Digitally printed translucent graphics illuminated and with opal acrylic or poly carbonate faces, light boxes are an extremely flexible format that is custom built to your specifications.",
    "Fremont Sign Company can supply light boxes in all formats, from slimline edge lit for retail display to double-sided under awning light boxes, wall-mounted light boxes, and flex face illuminated billboards. Not only can we design and build your light box or illuminated sign, we can install and connect as well, using fully licensed electricians.",
    "Your Fremont Sign Company specialist can advise you on all elements of design as well as correct placement in line with council regulations and being seen day and night. We’ll guide you through decisions as to whether your bright branding will be cantilevered off the side of a building or dropped down from an overhead awning. We’ll then arrange installation with fully licensed electricians.",
  ];
  const vehicleDesc = [
    "Whether your organization has a single car, a dozen vans, or a fleet of trucks, custom vehicle wraps and graphics will turn heads at all hours of the day and night, building awareness of your company with every trip.",
    "Fremont Sign Company offers a variety of vehicle wraps and graphics including custom car signage that can be applied to your car or van in your company colors, Colorful product images and full-vehicle wraps display your messages on every side of your vehicle for maximum visibility. Car decals allow you to put logos and contact information on a single car, a dozen vans, or a fleet of trucks. Car magnets provide visual impressions without commitment. Fremont Sign Company custom-made magnetic signs showcase your company name, logo and contact information wherever your vehicles travel. “Auto mags” can match your vehicle’s color to make the magnet look permanent.",
  ];
  return (
    <>
      <Hero smallTitle="Our Capabilities" title="PORTFOLIO" subTitle="Make an impression. First time. Every time." description={heroDesc} imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
      <Icons iconText={iconText}/>
      <Images imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
      <TextImage id="channel-letters" isImageLeft isBgGray title={["Channel", "Letters"]} description={channelDesc} imageName="mountain-works.png" />
      <TextImage id="monument-signs" title={["Monument", "Signs"]} description={monumentDesc} imageName="ds-works.png" />
      <TextImage id="poly-signs" isImageLeft isBgGray title={["Poly", "Signs"]} description={polyDesc} imageName="mountain-works.png" />
      <TextImage id="light-box" title={["Light", "Box"]} description={lightBoxDesc} imageName="ds-works.png" />
      <TextImage id="vehicle-wraps" isImageLeft isBgGray title={["Vehicle", "Wraps"]} description={vehicleDesc} imageName="mountain-works.png" />
    </>
  )
}

export default Content