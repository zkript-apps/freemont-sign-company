import Header from "@/components/Header";
import Content from "@/components/pages/make-payment/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: 'Make Payment - Fremont Sign Company',
    description: 'Make a payment for Fremont Sign Company services',
  });
}

export default function MakePayment() {
  return (
    <>
        <Header title="MAKE PAYMENT" />
        <Content/>
    </>
  )
}
