import { Page } from "@/components/Page";
import type { NextPage, GetStaticProps, GetServerSideProps } from "next";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>CoursesBox</title>
        <meta name="description" content="IT courses for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page title="Server render" />
    </>
  );
}

export const getServerSideProps: GetServerSideProps =
  async function getServerSideProps(ctx) {
    let start = 0;

    if (ctx.query.start && typeof ctx.query.start === "string") {
      start = Number(ctx.query.start);
    }

    return {
      props: {
        hydrationData: {
          stopwatchStore: {
            start,
          },
        },
      },
    };
  };

// import { Course as CourseType, Response } from "@/types";
// import { Courses } from "@/components/Course";

// type CoursesResponce = Response<CourseType[]>;

// export const getStaticProps: GetStaticProps = async () => {
//   const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

//   const responce = await fetch(`${api_url}/courses?populate=*`, {
//     method: "GET",
//   });

//   const { data: courses, meta, error }: CoursesResponce = await responce.json();

//   const status = error?.status;

//   if (status && (status < 200 || status >= 300)) {
//     return {
//       props: {
//         courses: [],
//         meta: {},
//       },
//     };
//   }

//   return {
//     props: {
//       courses,
//       meta,
//     },
//   };
// };

// const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;

// const Home: NextPage<{
//   courses: CourseType[];
// }> = ({ courses }) => (
//   <>
//     <Head>
//       <title>CoursesBox</title>
//       <meta name="description" content="IT courses for everyone" />
//       <link rel="icon" href="/favicon.ico" />
//     </Head>
//     <Courses courses={courses} strapi_url={String(strapi_url)} />
//   </>
// );

// export default Home;
