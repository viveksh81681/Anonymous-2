import { DrawerActions, StackActions } from '@react-navigation/native';
import React from 'react';

export const Navigation_ref = React.createRef();

export const Navigate = (route,params)=> Navigation_ref.current?.navigate(route,params);
export const GoBack = ()=> Navigation_ref.current?.goBack();
export const Replace = (route)=> Navigation_ref.current?.dispatch(StackActions.replace(route)); 
export const OpenDrawer = ()=> Navigation_ref.current.dispatch(DrawerActions.openDrawer());