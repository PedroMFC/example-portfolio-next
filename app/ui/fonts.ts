
import { JetBrains_Mono, Inter, Fira_Code } from 'next/font/google';

export const jetbrainsMono = JetBrains_Mono({ 
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jerbrainsMono"
});

export const inter = Inter({ subsets: ['latin'] });

export const firaCode =  Fira_Code({subsets: ["latin"]})