import { Input, Button } from "@mui/material"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { v4 as uuidv4 } from "uuid"
import todoListAtom from "../atom/todoListAtom"
import { TodoListType } from "../type/todoListType"

export default function Form() {
  const [tasks, setTasks] = useRecoilState<TodoListType[]>(todoListAtom)
  const [text, setText] = useState("")

  function addTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setTasks([
      ...tasks,
      { id: uuidv4(), taskname: text, isCompleted: false },
    ])
    setText("")
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  return (
    <form >
      <Input
        type="text"
        placeholder="taskを入力してください"
        value={text}
        onChange={handleChange}
        style={{ marginLeft: "10px" }}
      />
      <Button 
        variant="contained"
        type="submit" 
        onClick={(e) => addTask(e)}
        style={{ margin: "10px" }}
      >
        追加
      </Button>
    </form>
  )
}
