import "../styles/globals.css";
import Layout from "@/components/Layout";

export const metadata = {
  title: "Veezen | Mental Health in the Workplace",
  description:
    "Explore a healthier work environment with Veezen, our comprehensive guide to mental health in the workplace. Discover strategies, resources, and expert insights to promote well-being and productivity among employees. Prioritize mental health for a happier, more successful workforce.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
