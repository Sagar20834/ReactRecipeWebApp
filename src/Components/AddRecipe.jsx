import React from "react";
import { useForm } from "react-hook-form";

const AddRecipe = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data submitted", data);
  };
  return (
    <>
      <div className="flex justify-between border-y-[1px]  items-center   min-h-24  ">
        <h1 className="text-4xl font-semibold ml-24">Create New Recipe</h1>
        <button className="bg-[#B66053] min-w-32 rounded-lg text-white hover:scale-110 min-h-9 my-4 mr-24">
          {" "}
          Save
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col max-w-96 m-auto">
          {" "}
          <label htmlFor="title"> Recipe Title : </label>
          <input
            className=""
            type="text"
            {...register("title", {
              required: "Title is required",
              maxLength: {
                value: 50,
                message: "Title should not exceed 50 characters",
              },
              minLength: {
                value: 5,
                message: "Title should be at least 5 characters long",
              },
            })}
            aria-invalid={errors.title ? "true" : "false"}
            placeholder="Enter the Title"
          />
          {errors.title && (
            <p role="alert" className="text-red-500">
              ** {errors.title.message}
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default AddRecipe;
