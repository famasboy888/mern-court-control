import BackendTest from "../utils/backendTest.utils";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-2 bg-[var(--grey-200)] p-2">
      <p className="text-center mx-auto text-sm max-w-[var(--max-width)] w-[var(--fluid-width)] sticky bottom-0">
        &copy; 2024 Court Control. All Rights Reserved.
      </p>
      <BackendTest />
    </div>
  );
};

export default Footer;
