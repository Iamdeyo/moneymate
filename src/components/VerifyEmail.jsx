const VerifyEmail = () => {
  return (
    <div className="bg-white flex flex-col items-center text-center gap-12 pt-10">
      <div>
        <img src="/verifymail.png" alt="mail" />
      </div>
      <div>
        <p className="text-[24px] font-semibold">
          We have sent an email verification link to your email
        </p>
        <p className="text-[14px] font-normal pt-4">
          Kindly click on the email link to verify.
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
