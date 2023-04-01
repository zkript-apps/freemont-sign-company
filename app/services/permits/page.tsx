import Header from "@/components/Header";
import Content from "@/components/pages/services/permits/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: 'Services > Permits - Fremont Sign Company',
    description: 'In order to open a business, there is a long list of business licenses and permits that a new establishment must obtain.',
  });
}

export default function Permits() {
  return (
    <>
        <Header title="SERVICES > Permits" />
        <Content/>
    </>
  )
}
