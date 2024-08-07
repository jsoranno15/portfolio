import MainPage from "@/app/components/MainPage/MainPage";
import Head from "next/head";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <MainPage />
    </div>
  );
};

export default Home;
