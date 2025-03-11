import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import type { Metadata } from "next";
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
        title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
        },
        description: siteConfig.description,
        icons: "/logo.svg"
}

const MarketingLayout = ({ children } : { children: React.ReactNode;  })=>{
    return(
        <div className="h-full bg-slate-100">
        
        {/* Navbar */}
        <Navbar />
        <main className="pt-40 pb-20 bg-slate-100">
        
        {children}
        
        </main>
    
        {/* Footer */}
        <Footer />
        </div>
    );
    };
    export default MarketingLayout;