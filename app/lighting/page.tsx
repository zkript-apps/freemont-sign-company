import Header from "@/components/Header";
import Content from "@/components/pages/lighting/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: 'Lighting - Fremont Sign Company',
    description: 'For our clients, lighting is no afterthought. It’s a make or break factor in the success of their business and their brand and that',
  });
}

export default function Lighting() {
  return (
    <>
        <Header title="LIGHTING" />
        <Content/>
    </>
  )
}
