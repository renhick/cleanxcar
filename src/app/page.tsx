import Extras from "@/components/Extras";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Extras></Extras>

      <SpeedInsights />
    </>
  );
}
