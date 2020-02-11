import { createStyles } from "@material-ui/styles";
const styles = theme =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column"
    },
    tagIcons: {
      display: "flex",
      fontSize: "1.2rem",
      marginBottom: ".5rem"
    },
    submit: {
      width: "180px",
      height: "50px",
      fontSize: "1.3rem"
    },
    test: {
      marginLeft: "80vh",
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "250px",
      width: "600px"
    },

  });

export default styles;
