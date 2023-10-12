import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Veezen | Mental Health in the Workplace",
  description:
    "Explore a healthier work environment with Veezen, our comprehensive guide to mental health in the workplace. Discover strategies, resources, and expert insights to promote well-being and productivity among employees. Prioritize mental health for a happier, more successful workforce.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
