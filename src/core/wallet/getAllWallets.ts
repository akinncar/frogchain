import AsyncStorage from '@react-native-async-storage/async-storage';

// eslint-disable-next-line functional/prefer-readonly-type
export const getAllWallets = async (): Promise<Array<any>> => {
  const allWallets = await AsyncStorage.getItem('allWallets');
  return allWallets ? JSON.parse(allWallets) : [];
};
