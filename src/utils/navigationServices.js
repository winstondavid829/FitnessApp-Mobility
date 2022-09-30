import {
  createNavigationContainerRef,
  StackActions,
  CommonActions,
  DrawerActions,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

const replace = (routeName, params) => {
  navigationRef.current.dispatch(StackActions.replace(routeName, params));
};

const getActiveRoute = (state) => {
  if (!Array.isArray(state?.routes)) {
    return null;
  }
  const route = state?.routes?.[state?.index];
  if (route?.state) {
    return getActiveRoute(route?.state);
  }
  return route;
};

const reset = (routeName, params) => {
  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params,
        },
      ],
    })
  );
};

const openDrawer = () => {
  navigationRef.current.dispatch(DrawerActions.openDrawer());
};

const closeDrawer = () => {
  navigationRef.current.dispatch(DrawerActions.closeDrawer());
};

const pop = () => {
  navigationRef.current.dispatch(StackActions.pop());
};

export {
  navigate,
  replace,
  reset,
  openDrawer,
  pop,
  getActiveRoute,
  goBack,
  closeDrawer,
};
