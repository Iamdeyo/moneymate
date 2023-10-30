"use client";

import Signup from "@/components/Signup";
import { useState } from "react";

const SignUpPage = () => {
  const [hide, setHide] = useState(true);
  return (
    <>
      <Signup />
    </>
  );
};

export default SignUpPage;
