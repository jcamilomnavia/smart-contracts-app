import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getAuthToken } from 'modules/auth/selectors';
import SDK from 'utils/sdk';

const SdkLoader = ({ children }) => {
  const token = useSelector(getAuthToken);

  useEffect(() => {
    async function init() {
      await SDK.init();
      SDK.setToken(token);
    }
    init();
  }, [token]);

  return children;
};

SdkLoader.propTypes = {
  token: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SdkLoader;
