import React, { Component } from "react";
import Items from "./Items";
//import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
// Hint: query tags

class ItemsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Query query={ALL_ITEMS_QUERY} variables={{ filter: 2 }}>
        {({ loading, error, data }) => {
          //if (loading) return <FullScreenLoader />; /* DOESN'T EXIST */
          if (loading) console.log(loading);
          if (error) return `Error! ${error.message}`;
          //console.log(data, "all items in data");
          return (
          <Items items={data.items} />
          )
        }}
      </Query>
    );
  }
}
export default ItemsContainer;
