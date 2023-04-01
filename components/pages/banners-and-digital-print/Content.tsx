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
  const heroDesc = "Advancements in digital print technology and the introduction of top coated fabric have allowed printers to expand their product offerings to include fabric banners. These technological advancements include: the ability of the machinery to feed and process heavier weight materials; improved compatibility of the inks with fabrics; and higher print quality. As print head technology improved, digital printers could produce smaller ink droplets, which increased the number of dots per inch, resulting in crisper images. With the introduction of coated fabrics, inks could better saturate the fabric, so the colors are more robust and brilliant, instead of looking faded and washed out.";
  const bannersDesc = [
    "Digital printing is one of several printing techniques available for decorating your promotional items. It goes by many other names including four color process, full color process, and CMYK printing. No matter what you call it, digital printing will have your promo products looking ready for distribution. Discover exactly how it works in this exhilarating lesson!",
    "As you might guess, digital printing involves the use of a digital image. Have you ever printed out a color photograph or document on an inkjet printer at home or in the office? We’re assuming since it’s many years beyond 1995, you have. Digital printing for promotional products is very similar, with only a few important changes.",
  ];
  const stickersDesc = [
    "Printed stickers are highly effective when used alongside online campaigns and your other printed marketing, like flyers, leaflets, booklets and posters. Small stickers can go anywhere, so you can put them wherever your target market is likely to be.",
    "Of course, you can’t get all your information on a smaller sticker, but you can use it as a teaser of what’s to come. You can even just show a QR or web address to drive traffic to your web site. Keep your branding consistent with your other marketing and people will remember your brand and notice your message. That’s one reason why many of our customers use custom sticker printing when they want to launch a new campaign. It’s cost effective and a great way to get your campaign off to a flying start.",
  ];
  const posterDesc = [
    "Digital printing refers to methods of printing from a digital-based image directly to a variety of media. It usually refers to professional printing where small-run jobs from desktop publishing and other digital sources are printed using large-format and/or high-volume laser or inkjet printers. Digital printing has a higher cost per page than more traditional offset printing methods, but this price is usually offset by avoiding the cost of all the technical steps required to make printing plates. It also allows for on-demand printing, short turnaround time, and even a modification of the image (variable data) used for each impression. The savings in labor and the ever-increasing capability of digital presses means that digital printing is reaching the point where it can match or supersede offset printing technology’s ability to produce larger print runs of several thousand sheets at a low price.",
  ];
  return (
    <>
      <Hero smallTitle="Our Capabilities" title="Banners and Digital Print" subTitle="Make an impression. First time. Every time." description={heroDesc} imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
      <Icons iconText={iconText}/>
      <Images imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png"]} />
      <TextImage id="full-color-digital-print-banners" isImageLeft isBgGray title={["Full Color Digital Print", "Banners"]} description={bannersDesc} imageName="mountain-works.png" />
      <TextImage id="stickers" title={["Stickers", "Signs"]} description={stickersDesc} imageName="ds-works.png" />
      <TextImage id="poster-and-all-other-media" isImageLeft isBgGray title={["Poster And All Other", "Media"]} description={posterDesc} imageName="mountain-works.png" />
    </>
  )
}

export default Content