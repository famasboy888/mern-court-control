import { MdVisibility, MdVisibilityOff } from "react-icons/md";

type FormRowProps = {
  name: string;
  type: "text" | "password" | "date" | "number" | "email" | "textarea";
  labelText?: string;
  defaultValue?: any;
  show?: boolean;
  setShow?: (value: boolean) => void;
  isPassword?: boolean;
};

const FormRow = ({
  name,
  labelText,
  type,
  defaultValue,
  show,
  setShow,
  isPassword = false,
}: FormRowProps) => {
  return (
    <>
      <div className=" relative bg-[var(--grey-200)] rounded-[var(--border-radius)] overflow-hidden">
        <label
          htmlFor={name}
          className="absolute top-[0.35rem] left-[0.5rem] text-xs capitalize"
        >
          {(labelText || name).concat(":")}
        </label>
        <input
          type={isPassword ? (show ? "text" : "password") : type}
          id={name}
          name={name}
          defaultValue={defaultValue}
          className=" text-inherit p-2 pt-6 outline-none border-none bg-transparent w-full"
          required
        />
        {isPassword && setShow && (
          <button
            type="button"
            className="absolute flex items-center justify-center border-none bg-transparent top-1/2 -translate-y-1/2 right-4 text-lg text-[var(--grey-500)]"
            onClick={() => setShow(!show)}
          >
            {show ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        )}
      </div>
    </>
  );
};

export default FormRow;
