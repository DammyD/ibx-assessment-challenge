import { CustomButtonProps } from "@/types";
import { MdKeyboardArrowRight } from "react-icons/md";

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between gap-5">
        <div>
        {title}
        </div>
        <div className="relative w-6 h-6">
          <MdKeyboardArrowRight size="25"/>
        </div>
      </div>
    </button>
  );
};

export default CustomButton;
