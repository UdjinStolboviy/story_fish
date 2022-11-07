import type { NextPage, GetStaticProps, GetServerSideProps } from "next";
import Head from "next/head";
import { Layout } from "@/components/Layout";

export default function MainPage() {
  return (
    <>
      <Head>
        <title>CoursesBox</title>
        <meta name="description" content="IT courses for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>{/* <Page title="Server render" /> */}</Layout>
    </>
  );
}
