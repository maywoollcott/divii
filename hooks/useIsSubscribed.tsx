import * as InAppPurchases from 'expo-in-app-purchases';
import { useContext } from 'react';
import { Context } from '../Context';

const useIsSubscribed = () => {
  const context = useContext(Context);

  const subscripId = 'diviisubscrip1';

  const checkIfSubscribed = async () => {
    await InAppPurchases.connectAsync();
    let returnValue;
    const { results } = await InAppPurchases.getPurchaseHistoryAsync();
    console.log(results);
    if (results && results.some((result) => result.productId === subscripId)) {
      console.log('Already subscribed!');
      context.setIsSubscribed(true);
      returnValue = true;
    } else {
      console.log('not subscribed');
      context.setIsSubscribed(false);
      returnValue = false;
    }

    await InAppPurchases.disconnectAsync();
    return returnValue;
  };

  return { checkIfSubscribed };
};

export default useIsSubscribed;
