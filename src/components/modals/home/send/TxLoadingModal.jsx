import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { TbLoaderQuarter } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function TxLoadingModal({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  function closeModal() {
    setIsOpen(false);
    navigate("/home");
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[300px] transform overflow-hidden rounded-2xl bg-back p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-center items-center mx-auto mb-10 rounded-full">
                  <TbLoaderQuarter className="text-8xl text-btn animate-spin" />
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-lg text-center text-btn  animate-pulse font-medium leading-3"
                >
                  In Process...
                </Dialog.Title>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default TxLoadingModal;
