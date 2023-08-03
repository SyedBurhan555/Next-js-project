import React from "react";
import dynamic from "next/dynamic";

const WithCustomLoading = dynamic(() => import("./components/HeroSection"), {
  loading: () => <p>Loading...</p>,
});

const Page = () => {
  return (
    <WithCustomLoading
      mainheading={"LET'S WATCH MOVIE\nTOGETHER"}
      image={"/home.svg"}
    />
  );
};

export default Page;
