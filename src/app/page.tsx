import Extras from "@/components/Extras";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Featured from "@/components/Featured"
import Partners from "@/components/Partners";
import About from "@/components/About";
import Partner from "@/components/Partner";
import Galary from "@/components/Galary";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Extras></Extras>
      {/* <Featured></Featured> */}
      <About></About>
      <Partners></Partners>
      <Galary></Galary>
      <Contact></Contact>
      <SpeedInsights />
      <Analytics/>
    </>
  );
}
