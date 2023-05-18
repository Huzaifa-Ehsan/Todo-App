import { ButtonComponent } from "@/lib/button/button.component";
import { TextFieldComponent } from "@/lib/textfield/text-field.component";
import { UserIcon, AtSymbolIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useFormik } from "formik";
import { useState } from "react";

type Props = {
  name: string;
  email: string;
};

const FormComponent = () => {
  const [data, setData] = useState<Props>({ name: "", email: "" });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit,
  });
  async function onSubmit(values: Props) {
    setData(values);
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="space-x-2">
          <TextFieldComponent
            label="Name"
            type="text"
            EndAdornment={<UserIcon className="h-4 w-4 text-[#000]" />}
            inputProps={{ autoComplete: "off" }}
            {...formik.getFieldProps("name")}
          />
          <TextFieldComponent
            label="Email"
            type="email"
            EndAdornment={<AtSymbolIcon className="h-4 w-4 text-[#000]" />}
            required
            inputProps={{ autoComplete: "off" }}
            {...formik.getFieldProps("email")}
          />
          <span>
            <ButtonComponent
              onClick={() => {}}
              type="submit"
              buttonText="Add User"
              className="bg-[#707070] text-[#fff] hover:bg-[#545455]"
              endIcon={<PlusIcon className="w-4 h-4 text-[#fff]" />}
            />
          </span>
        </div>
      </form>
    </>
  );
};

export default FormComponent;
