 
import Downlaod from "./Downlaod";
import { FiArrowRightCircle } from "react-icons/fi";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}
const Modal = ({ openModal, setOpenModal }: ModalProps) => {
  return (
    <div>
      {openModal && (
        <div className="bg-black/30 flex items-center w-screen absolute top-0 h-screen z-50 justify-center ">
          <div className="md:w-[30%] w-[80%] h-[40vh] bg-gray-800 flex flex-col items-center justify-center z-50 rounded-xl gap-[4rem] ">
            <div className="flex md:gap-4 gap-2 items-center">
              <Downlaod />
              <div className="relative md:px-6 px-2 py-2 w-fit bg-white overflow-hidden rounded-lg text-black border border-black group hover:text-white ">
                <a
                  target="_blank"
                  href="https://docs.google.com/document/d/15NC1HPOQLAv2KO9mx8UCRrYFHDImV4P9U3OLmfjpYVg/edit?usp=sharing"
                  className="relative flex items-center text-xs md:text-base gap-2 font-bold z-50"
                >
                  CV Link <FiArrowRightCircle />
                </a>
                <div className="absolute inset-0 bg-purple-500 transition-transform transform translate-x-full group-hover:translate-x-0 duration-500"></div>
                <span className="absolute inset-0 z-20 text-black transition-colors duration-500 group-hover:text-white"></span>
              </div>
            </div>
            <button
              onClick={() => setOpenModal(false)}
              className="bg-red-600 px-6 py-2 rounded-lg"
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
