import React from 'react';
import Purchases from 'react-native-purchases';
import { Context } from '../Context';

const usePurchaseSubscription = () => {
  const context = React.useContext(Context);

  const purchaseSubscription = async (userId: string) => {
    Purchases.setDebugLogsEnabled(true);
    await Purchases.setup('appl_OWPeHBZFZEkiBqpCcFrvIhHSAQx', userId);
    try {
      const offerings = await Purchases.getOfferings();
      if (
        offerings.current?.availablePackages !== null &&
        offerings.current?.availablePackages[0]
      ) {
        // Display current offering with offerings.current
        let packageToBuy = offerings.current?.availablePackages[0];
        try {
          const res = await Purchases.purchasePackage(packageToBuy);
          context.setIsSubscribed(true);
        } catch (e: any) {
          console.log(JSON.stringify(e));
        }
      }
    } catch (e) {
      console.log(e);
      console.log('big error');
      console.log(JSON.stringify(e));
    }
  };
  return { purchaseSubscription };
};

export default usePurchaseSubscription;
