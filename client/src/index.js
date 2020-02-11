import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes';
import client from './apollo';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core/';
import registerServiceWorker from './registerServiceWorker';
import ItemPreviewProvider from './context/ItemPreviewProvider';
import ViewerProvider from './context/ViewerProvider';
import theme from './theme';

import './index.css';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <ViewerProvider>
          <ItemPreviewProvider>
            <Router>
              <AppRoutes />
            </Router>
          </ItemPreviewProvider>
        </ViewerProvider>
      </ApolloProvider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();