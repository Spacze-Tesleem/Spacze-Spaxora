import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
 title: "SPACZE — Make room for your next big idea",
 description: "SPACZE brings your commerce strategy, storefront and marketing into one workspace.",
};
export const viewport: Viewport = { themeColor: "#102b25" };
export default function RootLayout({ children }: { children: ReactNode }) {
 return <html lang="en"><body>{children}</body></html>;
}
