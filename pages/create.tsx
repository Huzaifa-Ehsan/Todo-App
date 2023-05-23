import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import CreateTodoForm from "./components/createForm.component";

const TodoCreatePage = () => {
  return (
    <div className="m-4">
      <h1 className="font-bold text-3xl">Create a New Todo</h1>
      <div className="flex space-x-4 my-4">
        <Breadcrumbs separator=">">
          <Link href={"/"}>Dashboard</Link>
          <Link href={"/list"}>Todo List</Link>
          <h1 className="text-[#000]">Create Todo</h1>
        </Breadcrumbs>
      </div>
      <CreateTodoForm />
    </div>
  );
};

export default TodoCreatePage;
