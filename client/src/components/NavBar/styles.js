import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: "10px"
  },
  title: {
    flexGrow: 1
  },
  logo: {
    width: "50px",
    marginTop: "35px",
    marginBottom: "35px"
  },
  container: {
    display: "flex",
    flexWrap: "nowrap",
    width: "20%",
    
  },
  containerone: {
    width: "80%",

  },
  text: {
    fontSize: "1.4rem"
  }
}));

export default useStyles;