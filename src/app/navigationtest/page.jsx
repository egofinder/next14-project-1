"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const { default: Link } = require("next/link");

const NavigationTestPage = () => {
  //client side navagation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log(pathname);
  console.log(searchParams.get("test"));
  const handleClick = () => {
    console.log("clicked");
    router.push("/");
    // router.back();
    // router.forward();
    // router.refresh(); // Re-rendor page
    // router.replace("/"); // Not save to browsing history
  };
  return (
    <div>
      <Link href="/">Home</Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
