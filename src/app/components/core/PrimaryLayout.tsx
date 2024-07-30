import Footer from "./Footer";
import Navbar from "./Navbar";

export const PrimaryLayout = ({ children }: { children: any }) => {
  return (
    <main className="min-h-[100vh]">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
