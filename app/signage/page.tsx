import Header from "@/components/Header";
import Content from "@/components/pages/signage/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: 'Signage - Fremont Sign Company',
    description: 'People will form an impression of your business based on a host of factors. One of those is the image you present with your signage.',
  });
}

export default function Signage() {
  return (
    <>
        <Header title="SIGNAGE" />
        <Content/>
    </>
  )
}
