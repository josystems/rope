import Donate from "../components/Donate";
import DonateCard from "../components/DonateCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import ProgramActivity from "../components/ProgramActivity";
import SectionTitle from "../components/SectionTitle";
import Subscribe from "../components/Subscribe";
import WhoWeAre from "../components/WhoWeAre";
export default function Home() {
  return (
    <div id='home'>
      <Navbar />
      <div className='scroll-smooth h-full w-full flex flex-col items-center '>
        <Hero />
        <ProgramActivity />
        <DonateCard />
        <SectionTitle title={" Our stories "} className='mt-8' />
        <Posts />
        <WhoWeAre title='Who we are' />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}
