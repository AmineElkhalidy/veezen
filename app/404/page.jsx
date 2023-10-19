import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="">
      <div className="">
        <img src="/assets/images/404/404.svg" alt="404" />

        <div className="">
          <h2 className="">Sorry</h2>
          <p className="">The page you asking for could not be found!</p>
          <div className="">
            <Link href="/">Go Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
