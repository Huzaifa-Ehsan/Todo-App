import { ButtonComponent } from "@/lib/button/button.component";
import { TextFieldComponent } from "@/lib/textfield/text-field.component";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { addTodo } from "@/redux/slice/todo";
import { UserIcon, AtSymbolIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Box, Paper } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useId } from "react";

type Props = {
  title: string;
  description: string;
  date: string;
  id: string;
};

const CreateFormComponent = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const id = useId();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
      id: "",
    },
    onSubmit,
  });
  async function onSubmit(values: Props) {
    if ((values.title && values.description && values.date) === "") {
      alert("Please add title, description and date");
      return;
    }

    dispatch(
      addTodo({
        title: values.title,
        description: values.description,
        date: values.date,
        id: id,
      })
    );
    router.push("/list");
  }

  return (
    <>
      <Box className="w-full h-[70vh] rounded-lg p-8" component={Paper}>
        <form onSubmit={formik.handleSubmit}>
          <div className="space-x-2">
            <TextFieldComponent
              label="Title"
              type="text"
              EndAdornment={<UserIcon className="h-4 w-4 text-[#000]" />}
              inputProps={{ autoComplete: "off" }}
              {...formik.getFieldProps("title")}
            />
            <TextFieldComponent
              label="Description"
              type="text"
              EndAdornment={<AtSymbolIcon className="h-4 w-4 text-[#000]" />}
              required
              inputProps={{ autoComplete: "off" }}
              {...formik.getFieldProps("description")}
            />
            <TextFieldComponent
              type="date"
              required
              inputProps={{ autoComplete: "off" }}
              {...formik.getFieldProps("date")}
            />
            <span>
              <ButtonComponent
                onClick={() => {}}
                type="submit"
                buttonText="Add Todo"
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

export default CreateFormComponent;
