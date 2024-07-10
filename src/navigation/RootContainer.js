import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import EntryNavigation from './EntryNavigation';
import MainNavigation from './MainNavigation';

const RootContainer = () => {
  const {user} = useSelector(state => state.auth);

  return <>{user ? <MainNavigation /> : <EntryNavigation />}</>;
  // return <EntryNavigation />;
};

export default RootContainer;
