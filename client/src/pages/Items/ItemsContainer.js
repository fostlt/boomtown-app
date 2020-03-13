import React, { Component } from "react";
import Items from "./Items";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import { ViewerContext } from "../../context/ViewerProvider";
//import styles from "./styles";
//import { withStyles } from "@material-ui/styles";

class ItemsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => (
          <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer.id }}>
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader />;
              //if (loading) console.log(loading);
              if (error) return `Error! ${error.message}`;
              //console.log(data, "all items in data");
              return <Items items={data.items} />;
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}
export default ItemsContainer;
