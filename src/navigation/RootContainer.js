import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import EntryNavigation from './EntryNavigation';

const RootContainer = () => {
  const {user} = useSelector(state => state.auth);

  //   return <>{user ? <MainNavigation /> : <EntryNavigation />}</>;
  return <EntryNavigation />;
};

export default RootContainer;
