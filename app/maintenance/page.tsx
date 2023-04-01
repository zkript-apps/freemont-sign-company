import Header from "@/components/Header";
import Content from "@/components/pages/maintenance/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: 'Maintenance - Fremont Sign Company',
    description: 'The exterior signs serve an incredibly important role in your business. With an eye-popping signage, you are sure that you are making your',
  });
}

export default function Maintenance() {
  return (
    <>
        <Header title="MAINTENANCE" />
        <Content/>
    </>
  )
}
