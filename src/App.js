//import './App.css';
import React from 'react';
import CreateWorkOut from './timer/TimerBlog';
import ExecuteWorkout from './timer/ExecuteWorkout';
import NavBar from './nav/NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//mport { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
//import { ApolloClient, InMemoryCache, ApolloProvider } from 'apollo-client';
//import { GraphQLClient } from 'graphql-request';
//import { createStore } from 'redux';
import TimerProvider from './timer/TimerProvider';
//import { Provider } from 'react-redux';
//import {rootReducer} from './reducers/rootReducer';


const App = () => {
  /*
  const apolloClient = new ApolloClient ({
    uri: "https://api-us-west-2.hygraph.com/v2/clbr8d3xt0p3n01usciv50dks/master",
    cache: new InMemoryCache(),

  });
  */

  //const store = createStore();

  return (
    /* <ApolloProvider client={apolloClient}> */
    /* <Provider store={store}> */
    <TimerProvider>
    <Router>
      <NavBar />
      <div className = "content">
        <Routes>
          <Route exact path='/create' element={<CreateWorkOut />}/>
          <Route exact path='/execute' element={<ExecuteWorkout />}/>
        </Routes>
      </div>
    </Router>
    </TimerProvider>
    /* </Provider> */
    /* </ApolloProvider> */
  );
};

export default App;
