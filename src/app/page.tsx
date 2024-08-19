import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/MusicSchoolTestimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection />
    <FeatureCourses />
    <WhyChooseUs />
    <MusicSchoolTestimonials />
    </>
  );
}
