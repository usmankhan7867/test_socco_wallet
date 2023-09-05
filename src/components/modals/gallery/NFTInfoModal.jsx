import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function NFTInfoModal({ isOpen, setIsOpen, callbackFunc, route }) {
  function closeModal() {
    setIsOpen(false);
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
                <Dialog.Title
                  as="h3"
                  className="text-base text-start text-light_green font-medium leading-6"
                >
                  Toni Polster - Golden Shoe 1987
                </Dialog.Title>
                <p className=" font-extrabold">#1987</p>
                <p className="text-sm content-evenly my-4">
                  <span className="font-semibold"> Description:</span> <br />
                  <br />
                  In 1987, he came close to winning the UEFA Golden Shoe with 39
                  goals scored, but it went to Romania ' s Rodion Cămătaru with
                  44 goals, some of which were manipulated. Polster was awarded
                  the Silver Shoe at the time. In 2007, Polster was subsequently
                  awarded the Golden Shoe for that year.
                </p>
                <div className="flex items-center justify-between text-sm font-semibold">
                  <p>Creator:</p>
                  <p>XYZ</p>
                </div>
                <div className="flex items-center justify-between text-sm font-semibold mt-2">
                  <p>Token-Standard</p>
                  <p>ERC721</p>
                </div>
                <div className="flex items-center justify-between text-sm font-semibold mt-2">
                  <p>Vermögens-Contract</p>
                  <p className=" text-light_green">0x35fdt...73dd</p>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-full border border-transparent bg-btn px-4 py-2.5 text-sm font-bold hover:bg-white hover:text-back focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    Close
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

export default NFTInfoModal;
