import { Paper, TextField, Typography } from "@mui/material"
import useStyles from './style.js'

const Contact = ({
    // eslint-disable-next-line react/prop-types
    name, setName,
    // eslint-disable-next-line react/prop-types
    email, setEmail,
    // eslint-disable-next-line react/prop-types
    message, setMessage
}) => {
    const classes = useStyles()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted successfully.')
    }
    return (
        <section>
            <h1>Contact</h1>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
                    <Typography variant="h6">Messages and Suggestions</Typography>
                    <TextField
                        id="outlined-required"
                        placeholder="Name"
                        variant="filled"
                        fullWidth
                        required
                        label="Required"
                        value={name}
                        onChange={e =>setName(e.target.value)}
                    />
                    <TextField
                        id="outlined-required"
                        placeholder="Email"
                        variant="filled"
                        label="Required"
                        fullWidth
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        id="filled-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Message"
                        variant="filled"
                        fullWidth
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <button className={classes.buttonSubmit} >Submit</button>
                </form>
            </Paper>
        </section>
    )
}

export default Contact