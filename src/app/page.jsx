"use client";
import Welcome from "@/components/Welcome";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Use setTimeout to trigger the redirection after 5 seconds
    const redirectTimeout = setTimeout(() => {
      router.push("/onboarding"); // Replace '/destination' with your desired destination URL
    }, 2000); // 5000 milliseconds (5 seconds)

    // Clear the timeout when the component unmounts
    return () => clearTimeout(redirectTimeout);
  }, [router]);
  return (
    <div>
      <Welcome />
    </div>
  );
};

export default Home;
