import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'


function Create() {
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
    </Container>
  )
}

export default Create
