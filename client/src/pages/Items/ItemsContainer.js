import React, { Component } from 'react';
import Items from './Items';
//import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import {ALL_ITEMS_QUERY} from '../../apollo/queries';
// Hint: query tags

class ItemsContainer extends Component {
  render() {
    return (
    <Query query={ALL_ITEMS_QUERY} variables={{filter: 1}}>
          {({ loading, error, data }) => {
      //if (loading) return <FullScreenLoader />; /* DOESN'T EXIST */
      if (loading) console.log(loading);
      if (error) return `Error! ${error.message}`;
      console.log(data, 'data');
    return <Items items={data}/>;
  }}
    </Query>
    );
}
}
export default ItemsContainer;

