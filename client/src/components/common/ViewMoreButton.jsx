import { FiArrowDownCircle } from 'react-icons/fi';

const ViewMoreButton = () => {
  return (
    <button className="flex items-center gap-2 px-5 py-2 text-white font-medium rounded-full bg-[#004aad] hover:bg-blue-700 transition animate-bounce">
      <FiArrowDownCircle className="text-xl" />
    </button>
  );
};

export default ViewMoreButton;
