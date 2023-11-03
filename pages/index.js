import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Flowbite, theme, useTheme } from "flowbite-react";

export default function Home() {


  return (
    <>
      <Flowbite>

        <SeoHead title='Vilload | Agencia Grafica' />
        <Layout>
          <Hero />
          <Feature />
          <Pricing />
        </Layout>

      </Flowbite>
    </>
  );
}

export const getStaticProps = async ({
  locale,
}) => {

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', [
        'common',
        // 'footer',
      ])),
    },
  }
}