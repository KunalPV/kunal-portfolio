import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-start items-center">
      <div className="w-[1080px]">
        <Navbar />
        <Hero />
        <History />
        <Footer />
      </div>
    </main>
  );
}
