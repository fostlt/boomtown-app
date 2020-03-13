import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    card: {
      marginTop: "2rem",
      width: 500,
      height: "700px"
    },
    media: {
      height: 400
    },
    profile: {
      fontSize: "1.3rem"
    },
    button: {
      border: "1px solid rgba(0, 0, 0, 0.50)",
      alignContent: "left",
      height: "50px",
      width: "150px",
      fontSize: 18,
      marginTop: 10
    },
    title: {
      fontSize: "2rem"
    },
    created: {
      fontSize: "1.3rem",
      color: "#909090",
      marginBottom: 10
    },
    description: {
      fontSize: "1.2rem",
      height: "50px"
    },
    container: {
      marginLeft: 50,
      // paddingTop: 70
      // marginTop: 100
    }
  });
export default styles;
