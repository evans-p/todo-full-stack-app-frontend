import { IoAdd } from "react-icons/io5";

const StickyButton = () => {
  return (
    <div className="fixed w-12 h-12 cursor-pointer rounded-full bg-rose-600 right-6 bottom-6 z-50 flex justify-center items-center">
      <IoAdd />
    </div>
  );
};

export default StickyButton;
