import React, { Component } from "react";
import { ViewerContext } from "../../context/ViewerProvider";
import { Query } from "react-apollo";
import Profile from "./Profile";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import FullScreenLoader from "../../components/FullScreenLoader";

class ProfileContainer extends Component {
  render() {
    const { userid } = this.props.match.params;
    return (
      this.props && (
        <ViewerContext.Consumer>
          {({ viewer }) => (
            <Query
              query={ALL_USER_ITEMS_QUERY}
              variables={{ id: (userid && userid) || viewer.id }}
            >
              {({ loading, error, data }) => {
                if (loading) return <FullScreenLoader />;
                if (error) return <p>{`Error! ${error.message}`}</p>;
                console.log("this.props", data);
                return <Profile profile={data.user} />;
              }}
            </Query>
          )}
        </ViewerContext.Consumer>
      )
    );
  }
}
export default ProfileContainer;
