import Header from "@/components/Header";
import Content from "@/components/pages/about/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: 'About - Fremont Sign Company',
    description: 'Over the years, we have dedicated ourselves to meet the production requirements of all of our clients. We take pride in the strong working relationships that we develop with our clients.',
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
