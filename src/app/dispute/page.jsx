"use client";

import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Dispute = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col px-4 items-center mb-[90px]">
      <div className="w-full mt-5" onClick={() => router.back()}>
        <img src="/back-outline.png" alt="back" />
      </div>
      <div className="flex flex-col gap-4 text-darkslateblue w-full mt-3">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Disputes</p>

          <img src="/bell.svg" alt="notify" />
        </div>
        <p className="text-[10px] mt-2">
          We apologise for the discomfort this must have caused you, kindly
          share and let us help you resolve it faster.
        </p>
      </div>
      <div className='mt-6 text-darkslateblue w-full'>
        <p className='text-[10px]'>
          What can we help you with?
        </p>
        <div className='flex px-4 justify-between h-[40px] bg-[#F0E1BB] rounded-[10px] items-center'>
          <p className='text-[14px]'>
            Transfer unsuccessful
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path d="M0.220115 0.267679C0.361098 0.0962844 0.552285 0 0.751634 0C0.950984 0 1.14217 0.0962844 1.28315 0.267679L5.00454 4.7932L8.72592 0.267679C8.86771 0.101142 9.05762 0.00899045 9.25474 0.0110735C9.45186 0.0131565 9.64042 0.109307 9.77981 0.278816C9.91919 0.448325 9.99826 0.677629 9.99997 0.917342C10.0017 1.15705 9.92591 1.388 9.78896 1.56042L5.53606 6.73232C5.39507 6.90372 5.20389 7 5.00454 7C4.80519 7 4.614 6.90372 4.47302 6.73232L0.220115 1.56042C0.0791756 1.38898 0 1.15648 0 0.914052C0 0.671626 0.0791756 0.439126 0.220115 0.267679Z" fill="black" />
          </svg>
        </div>

      </div>

      <div className='flex w-full px-4 h-[130px] bg-[#F0E1BB] rounded-[10px] flex-col mt-6 text-darkslateblue py-[14px]'>
        <p className='text-[14px] mb-1 text-darkslateblue'>
          Open New Dispute Ticket
        </p>
        <p className='text-[10px]'>
          Kindly share your concerns let us take it from there
        </p>
        <p className='text-[10px] mt-auto'>
          By clicking the button below, a ticket will be opened for you
        </p>
        <button className='text-white px-[24px] py-[8px] mt-1 rounded-[100px] text-[10px] w-fit bg-darkslateblue'>
          Open Ticket
        </button>
      </div>
      <div className='border border-orange w-full my-6'></div>


      <div className='h-[144px] rounded-[10px] w-full py-[10px] px-4 shadow-[0px_1px_4px_0px_rgba(0,_0,_0,_0.25)] text-darkslateblue'>
        <div className='flex items-center'>
          <span className='border-2 border-darkslateblue w-[33px] h-[33px] mr-2 flex justify-center items-center rounded-full '>   <img src='/robot.png' />
          </span>

          <div>
            <p className='font-[600]'>
              Moneymate
            </p>
            <p className='text-[8px]'> Transfer Unsuccessful </p>
          </div>
          <span className='ml-auto text-[10px] font-semibold'> Ticket: 006 </span>
        </div>
        <div className='p-[10px] bg-[#F0E1BB] text-[8px] rounded-full w-fit mt-3'> Hi, how can i help you? </div>
        <div className='flex items-center justify-end gap-2 mt-3'>
          <input placeholder='Type in your message for Ticket 001' className='p-[10px] outline-none bg-darkslateblue text-white text-[8px] rounded-full w-[200px]' />
          <img src='/send.png' alt='send' />
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dispute;
