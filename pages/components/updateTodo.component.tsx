import { ButtonComponent } from "@/lib/button/button.component";
import { TextFieldComponent } from "@/lib/textfield/text-field.component";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { addTodo, updateTodo } from "@/redux/slice/todo";
import { UserIcon, AtSymbolIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Box, Paper } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { FormEvent, useId, useState } from "react";
import { useParams } from "next/navigation";

type Props = {
  title: string;
  description: string;
  date: string;
  id: string;
};

const UpdateTodoComponent = () => {
  const router = useRouter();
  const todos = useAppSelector((state) => state.Todo.data);
  const existingTodo = todos.find((todo) => todo.id === router.query.id);
  const title = existingTodo?.title;
  const description = existingTodo?.description;
  const date = existingTodo?.date;
  const [updateTitle, setUpdatetitle] = useState(title);
  const [updateDescription, setUpdateDescription] = useState(description);
  const [updateDate, setUpdateDate] = useState(date);
  const dispatch = useAppDispatch();

  const HandleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      updateTodo({
        id: router.query.id,
        title: updateTitle,
        description: updateDescription,
        date: updateDate,
      })
    );
    router.push("/list");
  };
  return (
    <>
      <Box className="w-full h-[70vh] rounded-lg p-8" component={Paper}>
        <form onSubmit={HandleUpdate}>
          <div className="space-x-2">
            <TextFieldComponent
              label="Title"
              type="text"
              EndAdornment={<UserIcon className="h-4 w-4 text-[#000]" />}
              inputProps={{ autoComplete: "off" }}
              value={updateTitle}
              onChange={(e) => setUpdatetitle(e.target.value)}
            />
            <TextFieldComponent
              label="Description"
              type="text"
              EndAdornment={<AtSymbolIcon className="h-4 w-4 text-[#000]" />}
              required
              inputProps={{ autoComplete: "off" }}
              value={updateDescription}
              onChange={(e) => setUpdateDescription(e.target.value)}
            />
            <TextFieldComponent
              type="date"
              required
              inputProps={{ autoComplete: "off" }}
              value={updateDate}
              onChange={(e) => setUpdateDate(e.target.value)}
            />
            <span>
              <ButtonComponent
                onClick={() => {}}
                type="submit"
                buttonText="Update Todo"
                className="bg-[#707070] text-[#fff] hover:bg-[#545455]"
                endIcon={<PlusIcon className="w-4 h-4 text-[#fff]" />}
              />
            </span>
          </div>
        </form>
      </Box>
    </>
  );
};

export default UpdateTodoComponent;
