import { useState } from "react";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  PlusIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const SideBarComponent = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Link href={"/"}>
        <h1 className="font-bold text-center text-2xl my-2">Todos</h1>
      </Link>
      <div
        onClick={handleOpen}
        className="flex items-center justify-between p-4 rounded-md hover:bg-[#d3d2d2]"
      >
        <button className="font-bold">Todo</button>
        {!open ? (
          <ChevronRightIcon className="h-4 w-4 " />
        ) : (
          <ChevronDownIcon className="h-4 w-4" />
        )}
      </div>
      {open ? (
        <div className="space-y-7">
          <Link href={"/create"}>
            <div className="p-4 hover:bg-[#d3d2d2] flex items-center justify-between">
              <button>Create</button>
              <PlusIcon className="w-4 h-4" />
            </div>
          </Link>
          <Link href={"/list"}>
            <div className="p-4 hover:bg-[#d3d2d2] flex items-center justify-between">
              <button>List</button>
              <ClipboardDocumentIcon className="w-4 h-4" />
            </div>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default SideBarComponent;
