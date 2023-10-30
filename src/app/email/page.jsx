"use client";
import VerifiedEmail from "@/components/VerifiedEmail";
import VerifyEmail from "@/components/VerifyEmail";
import { useEffect, useState } from "react";

const Email = () => {
  const [verified, setVerified] = useState(false);
  useEffect(() => {
    // Use setTimeout to trigger the redirection after 5 seconds
    const redirectTimeout = setTimeout(() => {
      setVerified(true);
    }, 2000);
    return () => clearTimeout(redirectTimeout);
  }, []);
  return <>{verified ? <VerifiedEmail /> : <VerifyEmail />}</>;
};

export default Email;
