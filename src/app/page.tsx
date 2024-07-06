import Extras from "@/components/Extras";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Featured from "@/components/Featured"

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Extras></Extras>
      <Featured></Featured>
      <SpeedInsights />
      <Analytics/>
    </>
  );
}
