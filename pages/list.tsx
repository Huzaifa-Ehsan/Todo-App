import { useAppSelector } from "@/redux/hooks/hooks";

const TodoListPage = () => {
  const data = useAppSelector((state) => state.Todo.data);
  // console.log(data);
  return <div>TodoListPage</div>;
};

export default TodoListPage;
