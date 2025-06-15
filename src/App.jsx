
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';




function App() {

  let handleClick=()=>{
    console.log("button was clicked");
  }
  

  return (
    <>
      <h1>Material UI Demo</h1>
      <Button variant="outlined" color="primary" onClick={handleClick} size="large" startIcon={<DeleteIcon />}>
  Delete
</Button>
<Alert severity="error">Delete option is given here!</Alert>

    </>
  )
}

export default App
