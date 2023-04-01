import Header from "@/components/Header";
import Content from "@/components/pages/installation/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: 'Installation - Fremont Sign Company',
    description: 'At Fremont Sign Company, quality is the goal of the installation process. The signs are being installed with all product specific requirements in mind.',
  });
}

export default function Installation() {
  return (
    <>
        <Header title="INSTALLATION" />
        <Content/>
    </>
  )
}
