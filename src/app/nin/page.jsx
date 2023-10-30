"use client";

import BottomNav from "@/components/BottomNav";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Nin = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      setSuccess(false);
    }, 4000);
    return () => clearTimeout(redirectTimeout);
  }, [success]);
  return (
    <div className="min-h-screen flex flex-col px-4 items-center mb-[90px]">
      <div className="w-full mt-5" onClick={() => router.back()}>
        <img src="/back-outline.png" alt="back" />
      </div>
      <div className="flex flex-col gap-4 text-darkslateblue w-full mt-3">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">KYC Verification</p>

          <img src="/bell.svg" alt="notify" />
        </div>
        <p className="text-[10px] mt-2">Choose your means of verification..</p>
      </div>
      <div className="flex flex-col justify-center h-[124px] bg-[#E4EBFF] mt-14 w-full rounded-xl px-16">
        <p className="text-xs font-semibold">NIN Number:</p>
        <input
          type="text"
          className="outline-none h-10 border rounded-xl mt-4 border-darkslateblue px-4"
        />
      </div>
      <div className="flex gap-5 flex-col justify-center h-[187px] bg-[#E4EBFF] mt-14 w-full rounded-xl px-4">
        <div className="flex justify-between">
          <p className="text-xs font-semibold">Upload I.D image</p>
          <img src="camera.svg" alt="camera" />
        </div>
        <img src="nin.png" alt="nin" className="w-[167px] h-[106px] mx-auto" />
      </div>

      <button onClick={() => setSuccess(true)} className="btn-main mt-20">
        Upload
      </button>
      <BottomNav />
      {success && <SuccessModal />}
    </div>
  );
};

const SuccessModal = () => {
  return (
    <div className="fixed left-0 top-0 bg-[#D9D9D9DE] w-full h-screen z-50">
      <div className="absolute left-0 bottom-0 flex flex-col items-center gap-6 w-full h-80 bg-white pt-10 rounded-t-3xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="79"
          height="79"
          viewBox="0 0 79 79"
          fill="none"
        >
          <path
            d="M33.7164 53.6981L19.7499 39.7283L24.4043 35.0738L33.7164 44.3827L52.3341 25.7617L56.9918 30.4194L33.7164 53.6915V53.6981Z"
            fill="#5C2682"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.29158 39.5013C3.29158 19.5044 19.503 3.29297 39.4999 3.29297C59.4968 3.29297 75.7082 19.5044 75.7082 39.5013C75.7082 59.4982 59.4968 75.7096 39.4999 75.7096C19.503 75.7096 3.29158 59.4982 3.29158 39.5013ZM39.4999 69.1263C35.6095 69.1263 31.7572 68.36 28.1629 66.8712C24.5686 65.3824 21.3028 63.2003 18.5519 60.4493C15.8009 57.6984 13.6188 54.4326 12.13 50.8383C10.6412 47.244 9.87491 43.3917 9.87491 39.5013C9.87491 35.6109 10.6412 31.7586 12.13 28.1643C13.6188 24.57 15.8009 21.3042 18.5519 18.5533C21.3028 15.8023 24.5686 13.6202 28.1629 12.1314C31.7572 10.6426 35.6095 9.8763 39.4999 9.8763C47.3569 9.8763 54.8922 12.9975 60.4479 18.5533C66.0037 24.109 69.1249 31.6443 69.1249 39.5013C69.1249 47.3583 66.0037 54.8936 60.4479 60.4493C54.8922 66.0051 47.3569 69.1263 39.4999 69.1263Z"
            fill="#5C2682"
          />
        </svg>
        <p className="text-2xl font-semibold">Upload Successful</p>
        <p className="text-sm">
          A verification message would be sent to you shortly.
        </p>
      </div>
    </div>
  );
};

export default Nin;
