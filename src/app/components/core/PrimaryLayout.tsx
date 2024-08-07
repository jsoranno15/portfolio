import Footer from "./Footer/Footer";
import Navbar from "./Navbar";

export const PrimaryLayout = ({ children }: { children: any }) => {
  return (
    <main className="min-h-[100vh] w-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
