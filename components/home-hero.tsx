import {galanoGrotesque} from "@/app/fonts";

export default function HomeHero() {
    return (
        <div className="mx-auto max-w-3xl align-middle py-32 sm:py-48 lg:py-56">
            <div className="text-center">
                <h1 className="font-heading font-nokia-fc22 font-black uppercase text-8xl">
                    Handset
                </h1>
                <h1 className="mt-8 text-2xl font-semibold font-mono tracking-tight text-balance sm:text-2xl">
                    A suite of tools for the <span
                    className={galanoGrotesque.className}>Mobile Phone Museum</span> librarian.
                </h1>
            </div>
        </div>
    )
}
