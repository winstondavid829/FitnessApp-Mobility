import { showMessage, hideMessage } from "react-native-flash-message";

export const trackException = async (error) => {
  console.error(error);
};

export const trackEvent = async (eventName, eventData) => {
  console.log(eventName);
  Object.keys(eventData).forEach((key) => console.log(key, eventData[key]));
};

export const showToastMessage = async ({ message, type, ...props }) => {
  showMessage({
    message: message,
    type: type,
    ...props,
  });
};

export const showSuccessMessage = async (message) => {
  showMessage({
    message: message,
    type: "success",
  });
};

export const showErrorMessage = async (message) => {
  showMessage({
    message: message,
    type: "error",
    backgroundColor: "red",
  });
};

export const hideToastMessage = hideMessage;
