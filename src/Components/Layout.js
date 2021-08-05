import { makeStyles } from "@material-ui/core"
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { flexbox } from "@material-ui/system";

const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  root: {
    display: 'flex',
  }
})

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* App Bar */}

      {/* Side Drawer */}
      <Drawer className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5'>
            Joseph's Notes
          </Typography>
        </div>
      </Drawer>

      <div className={classes.page}>
        {children}
      </div>
    </div>
  )
}

export default Layout