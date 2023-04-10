import Head from "next/head";
import NewsletterSuscription from "@/components/home/NewsletterSuscription";
import Hero from "@/components/home/Hero";
import ImageSection from "@/components/home/ImageSection";
import Trailer from "@/components/home/Trailer";
import Metodologia from "@/components/home/Metodologia";
import React from "react";
import Layout from "@/components/global/Layaout";
import Acerca from "@/components/home/Acerca";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    <main className="flex text-black overflow-x-hidden min-h-screen m-0 bg-blue-200">
      <Layout className="p-0">
        <Hero />
        <Acerca />
        <ImageSection images={'sad'} />
        <Trailer />
        <ImageSection images={'asd'} />
        <Metodologia />
        <NewsletterSuscription />
      </Layout>
    </main>
  );
}
