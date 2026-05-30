import { Contact } from "@/components/home/contact";
import { Hero } from "@/components/home/hero";
import { MusicPreview } from "@/components/home/music-preview";
import { OpenSourcePreview } from "@/components/home/open-source-preview";
import { PlatformExpertise } from "@/components/home/platform-expertise";
import { SelectedWork } from "@/components/home/selected-work";
import { WritingPreview } from "@/components/home/writing-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <PlatformExpertise />
      <OpenSourcePreview />
      <WritingPreview />
      <MusicPreview />
      <Contact />
    </>
  );
}
