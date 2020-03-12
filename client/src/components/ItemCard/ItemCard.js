import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Gravatar from "react-gravatar";
import { NavLink } from "react-router-dom";
import moment from "moment";

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { item, classes } = this.props;
    /* added item && infront of return -> white screen -> maybe try on individual items */
    return ( 
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardActionArea>
            <NavLink to={(item && `/profile/` + item.itemowner.id)}>
            <CardMedia
              component="img"
              height="400"
              image="https://www.fillmurray.com/300/300"
            />
            </NavLink>
            <CardContent>
              <Typography className={classes.profile}>
                <Gravatar email={item && item.itemowner.email} />
                { item && '  ' + item.itemowner.fullname}
              </Typography>
              <Typography className={classes.created}>
                  {moment(item && item.created).fromNow()}
                </Typography>
              <Typography className={classes.title}>{item && item.title}</Typography>
              <Typography className={classes.description}>{item && item.description}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" className={classes.button}>
              Borrow
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ItemCard);





// import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
// import styles from "./styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import Gravatar from "react-gravatar";
// import { NavLink } from "react-router-dom";
// import moment from "moment";

// class ItemCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     let { item, classes } = this.props;
//     /* added item && infront of return -> white screen -> maybe try on individual items */
//     return ( 
//       <div className={classes.container}>
//         <Card className={classes.card}>
//           <CardActionArea>
//             <NavLink to={(item && `/profile/` + item.itemowner.id)}>
//             <CardMedia
//               component="img"
//               height="250"
//               image="https://www.fillmurray.com/300/300"
//             />
//             </NavLink>
//             <CardContent>
//               <Typography className={classes.profile}>
//                 <Gravatar email={item && item.itemowner.email} />
//                 { item && '  ' + item.itemowner.fullname}
//               </Typography>
//               <Typography className={classes.created}>
//                   {moment(item && item.created).fromNow()}
//                 </Typography>
//               <Typography className={classes.title}>{item && item.title}</Typography>
//               <Typography className={classes.description}>{item && item.description}</Typography>
//             </CardContent>
//           </CardActionArea>
//           <CardActions>
//             <Button size="large" className={classes.button}>
//               Borrow
//             </Button>
//           </CardActions>
//         </Card>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(ItemCard);
