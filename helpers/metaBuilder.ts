export function metaBuilder({ title, description, imgUrl, imgWidth, imgHeight }: { title: string, description: string, imgUrl?: string, imgWidth?: string | number, imgHeight?: string | number }) {
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${process.env.NODE_ENV === "production" ? "https://fremontsigncompany.com" : "http://localhost:3000"}`,
      siteName: "Fremont Sign Company",
      images: [
        {
          url: imgUrl ? imgUrl : "/fremont-sign-company.png",
          width: imgWidth ? imgWidth : "1920",
          height: imgHeight ? imgHeight : "1080",
        },
      ],
      locale: "en-US",
      type: "website",
    },
  };
}
