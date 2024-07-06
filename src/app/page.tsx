import Extras from "@/components/Extras";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Extras></Extras>

      <SpeedInsights />
      <Analytics/>
    </>
  );
}
