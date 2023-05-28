import { atom } from "recoil"
import { TodoListType } from "../type/todoListType"

const todoListState = atom<TodoListType[]>({
  key: "TodoList",
  default: [],
})

export default todoListState
