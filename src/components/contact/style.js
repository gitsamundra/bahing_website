import { makeStyles } from "@mui/styles";


export default makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      margin: 1,
    },
  },
  paper: {
    padding: 2,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '50%'
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));