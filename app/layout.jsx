import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ArrowUp from "@/public/assets/icons/layout/arrow-up.svg";
import Link from "next/link";

export const metadata = {
  title: "Veezen | Mental Health in the Workplace",
  description:
    "Explore a healthier work environment with Veezen, our comprehensive guide to mental health in the workplace. Discover strategies, resources, and expert insights to promote well-being and productivity among employees. Prioritize mental health for a happier, more successful workforce.",
};

export default function RootLayout({ children }) {
  // const [showArrow, setShowArrow] = useState(false);
  // const [header, setHeader] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 450) setShowArrow(true);
  //     else setShowArrow(false);
  //   });

  //   return () =>
  //     window.removeEventListener("scroll", () => {
  //       if (window.scrollY) setShowArrow(true);
  //       else setShowArrow(false);
  //     });
  // }, []);
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />

        {/* Arrow up */}
        {/* <Link
          href="#"
          className={`fixed p-1.5 duration-300 opacity-50 -right-10 bottom-2 gradient hover:opacity-100 ${
            showArrow ? "right-2" : ""
          }`}
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </Link> */}
      </body>
    </html>
  );
}
