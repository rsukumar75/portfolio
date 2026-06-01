import { Hero } from "@/components/home/hero";
import { OpenSourcePreview } from "@/components/home/open-source-preview";
import { PlatformExpertise } from "@/components/home/platform-expertise";
import { SelectedWork } from "@/components/home/selected-work";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <PlatformExpertise />
      <OpenSourcePreview />
    </>
  );
}
