import React, { useMemo } from "react";
import { useForm } from "react-hook-form";

const EditForm = ({ onClose, data ,setData, type}) => {

  console.log("Received Data:", data);
    
  const {
    register,
    handleSubmit,
    formState: { errors },    
  } = useForm({
    defaultValues: useMemo(() => {
      console.log("User has changed");
      return data;
    }, [data])
  });
  
  function onSubmit(data) {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
    if( type=="edit"){
        fetch(`${API_URL}/users/${data.id}`, {
            method: 'PUT', // 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(updatedData => {
              console.log("Updated Data:", updatedData);
              setData(prevData => prevData.map(user => 
                user.id === data.id ? updatedData : user
              ));
              onClose();
            })
    }else{
      const imageData = { ...data, display_name: data.display_name || "Default Name" };
      fetch(`${API_URL}/users`, {
            method: 'POST', // 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
         .then(res => res.json())
         .then(newData => {
          console.log(imageData);
              console.log("New Data:", newData);
              setData(prevData => [ newData, ...prevData]);
              onClose();
            })
    }
    
  } 

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}

      <div
        className="fixed inset-0 bg-black/20  transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      ></div>

      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3
                    className="text-xl font-semibold text-gray-900 pt-1 text-center"
                    id="modal-title"
                  >
                    {type === "edit" ? "Edit User" : "Create User"}
                  </h3>
                  <form
                    id="editUserForm"
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-6 bg-white rounded-lg w-full"
                  >
                    <div className="mb-4 w-full">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        First Name:
                      </label>
                      <input
                        {...register("first_name", {
                          required: "First name is required",
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="mb-4 w-full">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Last Name:
                      </label>
                      <input
                        {...register("last_name", {
                          required: "Last name is required",
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="mb-4 w-full">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email:
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="mb-4 w-full">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Gender:
                      </label>
                      <select
                        {...register("gender", {
                          required: "Gender is required",
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="" disabled>
                          Select gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="mb-4 w-full">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Display Image:
                      </label>
                      <input
                        {...register("display_name", {
                          required: "Display name is required",
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                form="editUserForm"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Submit
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;