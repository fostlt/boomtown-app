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
      display: "flex",
      flexDirection: "column",
      width: 500,
      position: "absolute",
      right: 400,
      top: 150
    },

  });

export default styles;
