import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiFillWarning } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function EnterYourPasswordModal({ isOpen, setIsOpen, callbackFunc, route }) {
  const navigate = useNavigate();
  function closeModal() {
    setIsOpen(false);
    if (callbackFunc) callbackFunc();
    if (route) navigate(route);
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          closeModal();
        }}
      >
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
              <Dialog.Panel className="w-full max-w-[300px] transform overflow-hidden rounded-2xl bg-back px-6 py-8 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-center items-center mb-4 bg-btn w-20 h-20 mx-auto rounded-full">
                  <AiFillWarning className="text-4xl" />
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-lg text-center text-btn font-medium leading-6"
                >
                  Enter your Password
                </Dialog.Title>

                <input
                  type="password"
                  className="w-full text-back outline-none text-2xl rounded-full px-3 py-1.5 mt-2"
                />

                <div className="mt-4">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-full border border-transparent bg-btn px-4 py-3 text-sm font-bold hover:bg-white hover:text-back focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    Next
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default EnterYourPasswordModal;
