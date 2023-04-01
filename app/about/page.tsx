import Header from "@/components/Header";
import Content from "@/components/pages/about/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: 'About - Fremont Sign Company',
    description: 'asdasdasd',
  });
}

export default function About() {
  return (
    <>
        <Header title="ABOUT" />
        <Content/>
    </>
  )
}
