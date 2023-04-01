import Header from "@/components/Header";
import Content from "@/components/pages/services/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: 'Services - Fremont Sign Company',
    description: 'We provide Signboard services related to Sign Designing, Building Signs, Outdoor and Indoor Sign...',
  });
}

export default function Services() {
  return (
    <>
        <Header title="SERVICES" />
        <Content/>
    </>
  )
}
