import React from 'react'
import useGlobalHook from 'use-global-hook';
import * as actions from './actions';

const initialState = {
    headerData: {},
    categoriesList: {},
    content: {},
    imagesList: {}
};
// eslint-disable-next-line react-hooks/rules-of-hooks
export default useGlobalHook(React, initialState, actions);