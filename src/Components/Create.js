import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import { KeyboardArrowRight } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

})

function Create() {
  const classes = useStyles();

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

      <Button
        onClick={() => console.log('You clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>

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
