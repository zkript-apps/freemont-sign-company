import Header from "@/components/Header";
import Content from "@/components/pages/contact/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: 'Contact - Fremont Sign Company',
    description: 'Our service pros are here and ready to discuss your specific branding challenges, work with you on estimates and provide whatever information you may need. ',
  });
}

export default function Contact() {
  return (
    <>
        <Header title="CONTACT" />
        <Content/>
    </>
  )
}
