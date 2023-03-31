"use client"
import React from 'react'
import Hero from '@/components/Hero';
import Images from '@/components/Images';
import TextImage from '@/components/TextImage';
import { faChartColumn, faFlag, faGears, faLightbulb, faList, faWrench } from '@fortawesome/free-solid-svg-icons';
import Icons from '@/components/Icons';

const Content = () => {
  const iconText = [
    {
      icon: faLightbulb,
      text: "LED Lighting"
    },
    {
      icon: faGears,
      text: "Retrofits"
    },
    {
      icon: faWrench,
      text: "Installation"
    },
    {
      icon: faList,
      text: "Site Audits"
    },
    {
      icon: faChartColumn,
      text: "ROI Analysis"
    },
    {
      icon: faFlag,
      text: "Reporting & Post-Conversion"
    },
  ];
  const heroDesc = "For our clients, lighting is no afterthought. It’s a make or break factor in the success of their business and their brand and that recognition is what brought them to Triangle. We’re are lighting retrofit experts, focusing on replacing inefficient lighting with state of the art energy efficient long lasting LED lamps and fixtures. At Triangle we only retrofit with DLC approved and listed products. This distinction immediately qualifies our clients to receive every single financial incentive their power company offers. These incentives routinely total thousands of dollars per site. Likewise these quality lighting products typically offer up to 10-year performance warranties.";
  const parkingLotsLightsDesc = [
    "Parking Lot Lighting is a term to describe the outdoor lighting that is commonly mounted on poles and located in parking lots, pathways and driveways. This type of exterior lighting is generally used to provide illumination to areas for vehicle and pedestrian use, with the most frequent attribute being that the light fixtures are mounted to poles. It is not uncommon to see multiple fixtures mounted on a single pole, and the specific mounting methods may vary significantly.",
    "Most existing Parking and Area Lighting applications utilize High Intensity Discharge (HID) lamps such as Metal Halide, High Pressure Sodium, and – if they are very old – Mercury Vapor Lamps.",
    "LED area lighting virtually eliminates ongoing maintenance with some fixtures, staying bright for up to 100,000 hours. Even running 12 hours a day, that’s over 22 years of light for college campuses, shopping malls, residential parks, hospital grounds, commercial parking lots, car dealerships, and other applications.",
  ];
  const securityAreaLightsDesc = [
    "In the field of physical security, security lighting is lighting that intended to deter or detect intrusions or other criminal activity on a piece of real property. It can also be used to increase a feeling of safety. Lighting is integral to crime prevention through environmental design.",
    "Security lighting can be counter-productive. Turning off lights halved the number of thefts and burglary in Övertorneå Sweden. A test in West Sussex UK showed that adding all-night lighting in some areas made people there feel safer, although crime rates increased 55% in those areas compared to control areas and to the county as a whole.",
    "Security lighting can be used in residential, commercial, industrial, institutional, and military settings. Some examples of security lighting include floodlights and low pressure sodium vapor lights. Most lights intended to be left on all night are high-intensity discharge lamps as these have good energy efficiency, thus reducing the cost of running a lamp for such long periods.",
  ];
  const exteriorLightsDesc = [
    "The lighting project is studied and adapted to the place or type of activity so that it can meet the needs of the client. In fact, there is a close link between architecture and light. Outdoor building lights highlight volumes, shapes, and points of access, leading us inside. This section features the projects of exterior building lights of:",
    "Airports",
    "Hotels",
    "Places of worship",
    "Places for leisure time",
    "Reception rooms",
    "Parks and gardens",
    "Bridges",
    "Residences",
  ];
  const ledLightingDesc = [
    "Light emitting diodes, or LEDs, have long been used in motor vehicles and exterior lighting applications, but have really taken off in interior home design. Lighting manufacturers often offer their most popular fittings with regular bulb and LED options. LED light fittings, in general, are more expensive than the older technology. Their advantages, however, are numerous.",
    "Most homeowners switch to LED lights because they are energy-efficient and long-lasting. However, when used in the right manner in the interior design, they can completely transform the look of a home. Nowadays, decorative LED light bulbs are available in a range of colours, and when paired with control gear, they can add an interesting element to the décor of a room.",
  ];
  return (
    <>
      <Hero smallTitle="Our Capabilities" title="Lighting" subTitle="Correct lighting requires experience." description={heroDesc} imagesNames={["parking1.jpg", "parking2.jpg", "parking3.jpg", "parking4.jpg","parking5.jpg"]} />
      <Icons iconText={iconText}/>
      <Images imagesNames={["Sarea1.jpg", "Sarea2.jpg", "Sarea3.jpg", "Sarea4.jpg"]} />
      <TextImage id="parking-lot-lights" isImageLeft isBgGray title={["Parking Lot", "Lights"]} description={parkingLotsLightsDesc} imageName="parking4.jpg" />
      <TextImage id="security-area-lights" title={["Security Area", "Lights"]} description={securityAreaLightsDesc} imageName="Sarea1.jpg" />
      <TextImage id="exterior-&-interior-building-lights" isImageLeft isBgGray title={["Exterior & Interior Building", "Lights"]} description={exteriorLightsDesc} imageName="Sarea2.jpg" />
      <TextImage id="led-lighting-for-restaurant-bar-or-home" title={["LED Lighting", "for Restaurant Bar or Home"]} description={ledLightingDesc} imageName="parking3.jpg" />
    </>
  )
}

export default Content