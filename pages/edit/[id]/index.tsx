import UpdateTodoComponent from "@/pages/components/updateTodo.component";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";

const TodoCreatePage = () => {
  return (
    <div className="m-4">
      <h1 className="font-bold text-3xl">Update Todo</h1>
      <div className="flex space-x-4 my-4">
        <Breadcrumbs separator=">">
          <Link href={"/"}>Dashboard</Link>
          <Link href={"/create"}>Create Todo</Link>
          <h1 className="text-[#000]">Update Todo</h1>
        </Breadcrumbs>
      </div>
      <UpdateTodoComponent />
    </div>
  );
};

export default TodoCreatePage;
