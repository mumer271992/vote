import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { API_HOST } from '../helpers/constants';

const DataContext = React.createContext({});
const apiFactory = baseURL => axios.create({ baseURL: `${API_HOST}` });

const ApiProvider = ({ baseURL, children }) => (
  <DataContext.Provider value={{ api: apiFactory(baseURL), baseURL }}>
    {children}
  </DataContext.Provider>
);

ApiProvider.propTypes = {
  baseURL: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const withApiProvider = ComponentToWrap => {
  return propsByParents => (
    <DataContext.Consumer>
      {props => <ComponentToWrap {...propsByParents} {...props} />}
    </DataContext.Consumer>
  );
};

export { withApiProvider };

export default ApiProvider;