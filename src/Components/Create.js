import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import { KeyboardArrowRight } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  },
})

function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title == '') {
      setTitleError(true)
    }
    if (details == '') {
      setDetailsError(true)
    }
    if (title && details) {
      console.log(title, details)
    }
  }

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>

      </form>


      {/* <Button type="submit" color="primary" >Submit</Button>
      <Button type="submit" color="secondary" variant="outlined" >Submit</Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>two</Button>
        <Button>three</Button>
      </ButtonGroup> */}

      {/* Icons */}
      <br />
      {/* <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="secondary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" fontSize="small" />
      <AcUnitOutlinedIcon color="error" fontSize="small" />
      <AcUnitOutlinedIcon color="disable" fontSize="small" /> */}
    </Container>
  )
}

export default Create
