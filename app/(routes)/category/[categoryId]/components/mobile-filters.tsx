"use client";

import { Size, Color } from "@/type";
import Button from "@/components/ui/button";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className=" lg:hidden flex items-center  justify-center gap-x-2  bg-black text-white"
      >
        Fitters
        <Plus size={20} />
      </Button>
      {/* background  */}
      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className="relative z-40 lg:hidden "
      >
        <div className="fixed inset-0 bg-black bg-opacity-40" />

        {/* Dialog position */}
        <div className="fixed inset-0 z-40 lg:hidden flex ">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl ">
            {/* Close Button */}

            <div className="flex  items-center justify-end px-43 p-2">
              <IconButton
                onClick={onClose}
                icon={<X size={15} />}
                className="bg-black text-white"
              />
            </div>
            {/* render the filter  */}
            <div className="p-4 ">
              <Filter valueKey="sizeId" data={sizes} name="sizes" />
              <Filter valueKey="colorId" data={colors} name="colors" />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
