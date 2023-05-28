import { TodoListType } from "../type/todoListType"
import { Divider, ListItem, ListItemText } from "@mui/material"

export default function Todo({ id, taskname }: TodoListType) {
  return (
    <>
      <ListItem disablePadding key={id}>
        <ListItemText primary={taskname} />
      </ListItem>
      <Divider />
    </>
  )
}
