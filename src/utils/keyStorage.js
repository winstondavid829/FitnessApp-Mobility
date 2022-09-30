import EncryptedStorage from "react-native-encrypted-storage";

export const setKeys = async (key, value, callBack = null) => {
  try {
    await EncryptedStorage.setItem(key, value);
  } catch (error) {}
  return null;
};

export const getKeys = async (key) => {
  try {
    const jsonValue = await EncryptedStorage.getItem(key);
    const data = jsonValue != null ? JSON.parse(jsonValue) : null;
    return data;
  } catch (error) {}
};

export const removeKeys = async (key) => {
  try {
    const result = await EncryptedStorage.getItem(key);
    if (result != null) await EncryptedStorage.removeItem(key);
  } catch (error) {}
};
