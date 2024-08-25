import Footer from "./Footer/Footer";
import Navbar from "./Navbar";

export const PrimaryLayout = ({ children }: { children: any }) => {
  return (
    <main className="min-h-[100vh] min-w-[100vw] ">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
