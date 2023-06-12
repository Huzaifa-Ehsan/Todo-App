import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { deleteTodo } from "@/redux/slice/todo";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import {
  Breadcrumbs,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";

const TodoListPage = () => {
  const data = useAppSelector((state) => state.Todo.data);
  const dispatch = useAppDispatch();

  const HandleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="m-4">
      <h1 className="font-bold text-3xl">Todo List</h1>
      <div className="flex space-x-4 my-4">
        <Breadcrumbs separator=">">
          <Link href={"/"}>Dashboard</Link>
          <Link href={"/create"}>Create a New Todo</Link>
          <h1 className="text-[#000]">List Todo</h1>
        </Breadcrumbs>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="font-bold">Title</TableCell>
            <TableCell className="font-bold">Description</TableCell>
            <TableCell className="font-bold">Date</TableCell>
            <TableCell className="font-bold">Actions</TableCell>
          </TableRow>
        </TableHead>
        {data.map((todo, index) => {
          return (
            <TableBody key={index}>
              <TableRow>
                <TableCell>{todo.title}</TableCell>
                <TableCell>{todo.description}</TableCell>
                <TableCell>{todo.date}</TableCell>
                <TableCell className="flex space-x-2">
                  <div className="flex space-x-4">
                    <TrashIcon
                      className="w-4 h-4"
                      onClick={() => HandleDelete(todo.id)}
                    />
                    <Link href={`/edit/${todo.id}`}>
                    <PencilSquareIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
    </div>
  );
};

export default TodoListPage;
