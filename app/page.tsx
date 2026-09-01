import HomeHero from "@/components/home-hero";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Handset",
    description: "A toolkit for librarians.",
};

export default function Home() {
    return (
        <HomeHero/>
    );
}
