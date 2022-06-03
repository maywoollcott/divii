import { useContext } from 'react';
import { Context } from '../Context';
import Purchases from 'react-native-purchases';

const useIsSubscribed = () => {
  const context = useContext(Context);

  const subscripId = 'diviisubscrip1';

  const checkIfSubscribed = async (userId: string) => {
    Purchases.setDebugLogsEnabled(true);
    await Purchases.setup('appl_OWPeHBZFZEkiBqpCcFrvIhHSAQx', userId);

    const { activeSubscriptions } = await Purchases.getPurchaserInfo();
    if (activeSubscriptions && activeSubscriptions.includes(subscripId)) {
      console.log('User is subscribed!');
      context.setIsSubscribed(true);
      return true;
    } else {
      console.log('User is not subscribed.');
      context.setIsSubscribed(false);
      return false;
    }
  };

  const getDetailedSubscriptionInfo = async () => {
    const { entitlements } = await Purchases.getPurchaserInfo();
    return {
      originalPurchaseDate: entitlements.active.montly.originalPurchaseDate,
      renewsOn: entitlements.active.montly.expirationDate,
    };
  };

  return { checkIfSubscribed, getDetailedSubscriptionInfo };
};

export default useIsSubscribed;
