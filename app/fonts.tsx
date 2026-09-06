import {JetBrains_Mono, Montserrat} from "next/font/google";
import localFont from "next/font/local";

const monoHeading = JetBrains_Mono({subsets: ['latin'], variable: '--font-heading'});
const mono = JetBrains_Mono({subsets: ['latin'], variable: '--font-mono'});

const montserrat = Montserrat({subsets: ['latin'], variable: '--font-sans'});

const galanoGrotesque = localFont({
    src: [
        {
            path: '../public/fonts/GalanoGrotesqueRegular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/GalanoGrotesqueItalic.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../public/fonts/GalanoGrotesqueBold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/GalanoGrotesqueBoldItalic.otf',
            weight: '700',
            style: 'italic',
        },
    ],
    variable: '--font-galano-grotesque'
})

const nokiaFC22 = localFont({
    src: [
        {
            path: '../public/fonts/NokiaFC22.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-nokia-fc22'
})

export {monoHeading, mono, montserrat, galanoGrotesque, nokiaFC22}