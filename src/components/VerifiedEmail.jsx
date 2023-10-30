import { useRouter } from "next/navigation";
import { useEffect } from "react";

const VerifiedEmail = () => {
  const router = useRouter();
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push("/unverified-dashboard");
    }, 2000);
    return () => clearTimeout(redirectTimeout);
  }, [router]);
  return (
    <div className="bg-white flex flex-col items-center text-center gap-12 pt-40">
      <img src="/gg_check-o.svg" alt="check" />
      <p className="text-[24px] font-bold text-darkslateblue">
        Your Email has been <br /> verified
      </p>
    </div>
  );
};

export default VerifiedEmail;
