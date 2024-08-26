import MainPage from "@/app/components/MainPage/MainPage";
import Head from "next/head";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Juliana Soranno | Developer Portfolio</title>
        <meta
          name="description"
          content="A software engineer dedicated to building reliable, user-focused applications with a touch of innovation and creativity."
        />
        <meta
          name="keywords"
          content="software engineer, juliana soranno, soranno, portfolio"
        />
        <meta name="author" content="Juliana Soranno"></meta>
      </Head>
      <MainPage />
    </div>
  );
};

export default Home;
