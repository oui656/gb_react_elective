import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const ToDoList = () => {
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState("");

  console.log(list);

  const addTask = () => {
    setList([...list, inputText]);
    setInputText("");
  };

  return (
    <Card style={{ marginTop: "1em" }}>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
        >
          <Grid item xs={8}>
            <TextField
              id="filled-basic"
              label="New Task"
              variant="filled"
              required={true}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button onClick={addTask} variant="contained">
              Add
            </Button>
          </Grid>
          <Grid item>
            <List sx={{ width: "100%", maxWidth: 360 }}>
              {list.map((li) => (
                <ListItem
                  key={li}
                  disableGutters
                  secondaryAction={
                    <IconButton
                      onClick={() => setList(list.filter((lis) => lis !== li))}
                      edge="end"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={li} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ToDoList;
