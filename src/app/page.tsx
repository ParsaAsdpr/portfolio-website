import About from "@/components/About";
import Contact from "@/components/Contact/Contact";
import Experiences from "@/components/Experiences/Experiences";
import Footer from "@/components/Footer";
import GoToTopButton from "@/components/GoToTopButton";
import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects/Projects";
import { getSiteData } from "@/utils/supabase";
import { Metadata, Viewport } from "next";

const fallbackMetadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio website",
};

const fallbackViewport: Viewport = {
  themeColor: "#F8E179",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteData();
  if (!site) return fallbackMetadata;

  const { metadata } = site;

  return {
    title: site.title,
    description: site.description,
    manifest: metadata.manifest,
    applicationName: metadata.applicationName,
    formatDetection: metadata.formatDetection,
    authors: metadata.authors,
    robots: metadata.robots as Metadata["robots"],
    keywords: metadata.keywords,
    icons: {
      icon: {
        url: site.icon,
      },
    },
  };
}

export async function generateViewport(): Promise<Viewport> {
  const site = await getSiteData();

  return {
    ...fallbackViewport,
    themeColor: site?.theme_color ?? fallbackViewport.themeColor,
  };
}

export default async function Home() {
  const site_data = await getSiteData();

  return (
    <>
      <Intro />
      <Hero site_data={site_data!} />
      <About site_data={site_data!} />
      <Experiences site_data={site_data!} />
      <Projects site_data={site_data!} />
      <Contact site_data={site_data!} />
      <Footer site_data={site_data!} />
      <GoToTopButton />
    </>
  );
}

