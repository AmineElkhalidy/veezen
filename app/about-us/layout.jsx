import React from "react";
import Layout from "@/components/Layout";

export const metadata = {
  title: "Veezen | About Us",
  description:
    "Explore a healthier work environment with Veezen, our comprehensive guide to mental health in the workplace. Discover strategies, resources, and expert insights to promote well-being and productivity among employees. Prioritize mental health for a happier, more successful workforce.",
};

const RootLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default RootLayout;
