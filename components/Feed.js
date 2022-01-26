import { SparklesIcon } from "@heroicons/react/outline";
import Input from "../components/Input";

const Feed = () => {
  return (
    <div
      className="text-white flex-grow  max-w-2xl
      border-l border-r border-gray-700 
      sm:ml-[73px] xl:ml-[370px]"
    >
      <div
        className="bg-black text-[#d9d9d9]  border-b border-gray-700
      flex items-center sm:justify-between
       py-2 px-3 sticky top-0 z-50"
      >
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div
          className="hoverAnimation w-9 h-9 flex items-center justify-center
        xl:px-0 ml-auto"
        >
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
      <Input />
    </div>
  );
};

export default Feed;