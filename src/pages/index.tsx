import Head from "next/head";
import NewsletterSuscription from "@/components/home/NewsletterSuscription";
import Hero from "@/components/home/Hero";
import ImageSection from "@/components/home/ImageSection";
import Trailer from "@/components/home/Trailer";
import Metodologia from "@/components/home/Metodologia";
import React from "react";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>

      <Hero />
      <ImageSection images={'sad'} />
      <Trailer />
      <ImageSection images={'asd'} />
      <Metodologia />
      {/* <NewsletterSuscription /> */}
    </div>
  );
}
