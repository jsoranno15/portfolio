import AboutPage from "@/app/components/AboutPage/AboutPage";
import HomePage from "@/app/components/HomePage/HomePage";
import Head from "next/head";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Home Page</title>
      </Head>
      <AboutPage />
    </div>
  );
};

export default Home;
