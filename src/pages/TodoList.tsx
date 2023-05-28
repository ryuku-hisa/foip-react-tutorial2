import Header from "../components/Header"
import Form from "../components/Form"
import { TodoListType } from "../type/todoListType"
import { useRecoilValue } from "recoil"
import todoListAtom from "../atom/todoListAtom"
import { Box, List } from "@mui/material"
import Todo from "../components/Todo"

export default function TodoList() {
  const todolist = useRecoilValue<TodoListType[]>(todoListAtom)
  return (
    <div>
      <Header />
      <div className="container">
        <Form />
        {todolist.map((task: TodoListType) => (
          <Box sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper", margin: "10px", }}>
            <List>
              <Todo id={task.id} taskname={task.taskname} isCompleted={task.isCompleted} />
            </List>
          </Box>
        ))}
      </div>
    </div>
  )
}
