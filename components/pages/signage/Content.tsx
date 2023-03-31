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
  const heroDesc = "Here’s what we know: People will form an impression of your business based on a host of factors. One of those is the image you present with your signage. Often the first point of contact you have with potential customers, your signage speaks volumes about you and your brand. Helping our clients build brand image and communicate brand values has been our priority for more than 80 years now. From local projects to nationwide roll outs, we bring a level of custom craftsmanship, quality fabrication, creativity and collaborative customer service to every job that we’re confident you’ll find is unmatched.";
  const channelLettersDesc = [
    "Channel letters are custom-made metal or plastic letters commonly used in exterior signage on public and commercial buildings, and often internally illuminated. Unlit three dimensional letters that are applied to sign panels or monuments are usually referred to as dimensional letters.",
    "Channel letters may be flush mounted (attached directly to the building facade), or they may be mounted on a raceway or wireway. A raceway is a rectangular mounting structure which serves as both a container for the sign’s electrical components (such as a power supply) and a mounting structure.",
    "A wireway also serves as a mounting structure but typically contains only wiring. It is thinner and broader than a raceway, and may also be used as a backer panel for the channel letter set.",
    "Face-lit letters may also be mounted so they rest on the top the building surface with a bottom and top rail supported by metal arms.",
  ];
  const haloLettersDesc = [
    "Welded aluminum dimensional letter that illuminates out the back creating a “Halo” of light around the letter. The color of the light around the letter is determined by the color of the LEDs illuminating the letter from the inside.",
    "The LEDs are contained inside the letter protected by a translucent Lexan™ back. The back is also used for mounting the letter to the mounting surface. The letters will stand off the mounting surface to create a space for light to reflect against mounting surface.",
    "This type of letter is commonly called a “Reverse Channel Letter”.",
    "Since the Halo Lit Letters and Logos are illuminated only around the edges, consideration should be allowed for how graphics will be seen when lit. Multicolor graphics on faces may need special attention such as a combination Face Lit and Halo Lit.",
  ];
  const cabinetSignsDesc = [
    "Cabinet signs, also referred to as wall signs or box signs, are internally illuminated signs, typically mounted to a storefront wall, though they can also be freestanding as a monument or pole sign. Giving visibility to businesses both day and night, cabinet signs are known for their durability and versatility.",
    "Cabinet signs are most commonly manufactured using extruded aluminum components that are welded together, providing a strong frame for polycarbonate or impact-resistant acrylic sign faces. While many cabinet signs are rectangular, nearly any shape can be achieved, giving business owners the option to fully customize their signage in order to best attract customers. Commercial landlords appreciate the flexibility of cabinet signs with the option to replace a sign’s face for a new tenant without needing to replace the entire structure.",
    "Piedmont Plastics stocks both acrylic and polycarbonate for cabinet sign faces in a variety of colors, sizes, and thicknesses, and can also provide aluminum and LEDs.",
  ];
  const pushThruLettersDesc = [
    "Push thru signs are a special type of sign where the letter, logo, or shape is routed out of a solid surface and thick acrylic is routed to match. The acrylic has a hat on it and is “pushed through” the back of the sign and attaches to the solid surface. The face of the push thru generally has a vinyl film on it to give the letter the color required.",
    "There are a variety of finishes available for push thru letters and shapes, and many signs can be found with a combination of them:",
    "Vinyl transparent faces",
    "Solid faces: Vinyl, metal, plastic, etc.",
    "Sandblasted edges for a diffused even look",
    "Polished edges for a crisp clean look",
  ];
  const castLettersDesc = [
    "Cast metal sign letters provide a quality, permanent image for outdoor signage of business names or address numbers. The bronze or aluminum metal wall letters can be custom made in different sizes and finishes. Cast metal building sign letters are easy to install and come with a lifetime guarantee. There is an online sign designer to instantly preview and quote.",
    "Strength, texture, image and durability. Each metal letter is precision cast in aluminum or bronze using up to twenty distinct manufacturing steps. The metal provides depth and permanence to your image. Seven metal finishes give you the choice of dazzling shine, brilliant color, or natural and antiquated metal. Combine these finishes with an extensive selection of letter styles to design signs that reflect your individual image.",
    "The biggest difference is that cast metal letters have more depth than a flat cut out metal letter. Cast metal letters are hollow in the back so your not paying for all the material that won’t be seen anyway.",
  ];
  const plasticLettersDesc = [
    "Plastic letters are a popular sign material, and for good reason. The colors stay vibrant in severe weather conditions, making them ideal outdoor sign letters. Almost all of our plastic letters are guaranteed for life. Not only are these plastic sign letters extremely durable, many styles are eco-friendly. Acrylic, Injection Molded, and Formed Plastic are made from renewable resources, and are not petroleum based. Flat cut plastic alphabet letters, and foam letters are some our best sellers. Hollow plastic letters can be fitted with LEDs for illuminated sign letters. Whether you need plastic wall letters for the lobby or plastic building signs for your business, artisans at Woodland are ready to craft your custom plastic logo.",
    "We can produce both small and large letters and numbers. One of the biggest questions we get are the difference between these plastic letters and acrylic letters. The major different is theses are formed plastic letters which means they are made around a mold and hollow inside. The acrylic letters are laser cut and solid throughout.",
  ];
  const monumentSignsDesc = [
    "A monument sign is a freestanding sign that is low to the ground. Often, these signs contain elements of masonry, but not always. They may also be crafted from foam that replicates the look of masonry, and few people can tell the difference.",
    "With a monument sign, you can control both the signage and the structure itself. KC Sign & Awnings offers a variety of styles for custom monument signs, so you can mix and match to your heart’s desire.",
    "We pre-assemble all the letters on the sign for you. Installing the sign is very simple with just two holes to dig and two posts to set. See instructions here.",
    "If you choose a lighted monument signs, keep in mind that you’ll need an electrical junction at the sign location. We will provide the power supply (transformer) needed to power the low voltage LEDs. Typically the electrical is run to a concrete pad footing for the sign.",
  ];
  const polySignsDesc = [
    "There is nothing more perfect than a material that is as versatile and professional as a polyethylene sign. Polyethylene plastic signs are durable and weather resistant and can be applied to may different surfaces and in many different ways. The plastic material is used to make signs for many different companies and for many different reasons. It is also a less expensive alternative to other materials on the market.",
    "Polyethylene signs are weather resistant in rain, shine, snow and more. It is resistant to chemicals and is thin enough to where it can be applied with a staple gun to wood and other soft surfaces. Although the material is only .055” thick, it still will not crack, peel or chip. The screen printed ink used on the polyethylene plastic signs are UV inks so that even the print will look like new for longer than just a couple weeks. Your signs will look brand new years down the road when properly taken care of.",
    "These sizes include poly signs that have square corners, round corners and even common special shapes such as octagon, circle, triangle and shield.",
  ];
  const engravingSignsDesc = [
    "Here’s what we know: People will form an impression of your business based on a host of factors. One of those is the image you present with your signage. Often the first point of contact you have with potential customers, your signage speaks volumes about you and your brand. Helping our clients build brand image and communicate brand values has been our priority for more than 80 years now. From local projects to nationwide roll outs, we bring a level of custom craftsmanship, quality fabrication, creativity and collaborative customer service to every job that we’re confident you’ll find is unmatched."
  ];
  return (
    <>
      <Hero smallTitle="Our Capabilities" title="Signage" subTitle="Make an impression. First time. Every time." description={heroDesc} imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
      <Icons iconText={iconText}/>
      <Images imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
      <TextImage id="channel-letters" isImageLeft isBgGray title={["Channel", "Letters"]} description={channelLettersDesc} imageName="mountain-works.png" />
      <TextImage id="halo-letters" title={["Halo", "Letters"]} description={haloLettersDesc} imageName="ds-works.png" />
      <TextImage id="cabinet-signs" isImageLeft isBgGray title={["Cabinet", "Signs"]} description={cabinetSignsDesc} imageName="mountain-works.png" />
      <TextImage id="push-thru-letters" title={["Push Thru", "Letters"]} description={pushThruLettersDesc} imageName="ds-works.png" />
      <TextImage id="cast-letters" isImageLeft isBgGray title={["Cast", "Letters"]} description={castLettersDesc} imageName="mountain-works.png" />
      <TextImage id="plastic-letters" title={["Plastic", "Letters"]} description={plasticLettersDesc} imageName="ds-works.png" />
      <TextImage id="monument-signs" isImageLeft isBgGray title={["Monument", "Signs"]} description={monumentSignsDesc} imageName="mountain-works.png" />
      <TextImage id="poly-signs" title={["Poly", "Signs"]} description={polySignsDesc} imageName="ds-works.png" />
      <TextImage id="engraving" isImageLeft isBgGray title={["Engraving", "Signs"]} description={engravingSignsDesc} imageName="mountain-works.png" />
    </>
  )
}

export default Content