import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import MusicSchoolTestimonials from "@/components/MusicSchoolTestimonials";
import UpComingWebinars from "@/components/UpComingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection />
    <FeatureCourses />
    <WhyChooseUs />
    <MusicSchoolTestimonials />
    <UpComingWebinars />
    <Instructor />
    </>
  );
}
