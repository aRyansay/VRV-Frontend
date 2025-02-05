import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import EditRoleModal from "./EditRoleModal";

const RoleRecord = ({
  name,
  permissions,
  id,
  handleEditRole,
  handleDeleteRole,
}) => {
  const [isEditRoleModalOpen, setEditRoleModalOpen] = useState(false);

  return (
    <>
      <EditRoleModal
        isOpen={isEditRoleModalOpen}
        onClose={() => setEditRoleModalOpen(false)}
        onSubmit={handleEditRole}
        role={{ name, permissions, id }}
      />

      <div className="bg-slate-200 text-gray-800 rounded-md grid grid-cols-3 hover:shadow-sm hover:bg-slate-300 transition-all">
        <div className="col-span-1 lg:col-span-1 p-2 flex items-center justify-center">
          <p className="font-semibold">{name}</p>
        </div>
        <div className=" col-span-1 flex items-center text-center lg:col-span-1 p-2  justify-center">
          <p>
            {permissions
              .map(
                (permission) =>
                  permission.charAt(0).toUpperCase() + permission.slice(1)
              )
              .join(", ")}
          </p>
        </div>

        <div className="col-span-1 lg:col-span-1 p-2 flex justify-center">
          <button
            onClick={() => setEditRoleModalOpen(true)}
            className="text-xl text-gray-800 p-2 md:hover:text-blue-700 md:hover:bg-white transition-all rounded-full"
          >
            <MdEdit />
          </button>
          <button
            onClick={() => handleDeleteRole(id)}
            className="text-xl text-gray-800 p-2 md:hover:text-red-500 md:hover:bg-white transition-all rounded-full"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
};

export default RoleRecord;
