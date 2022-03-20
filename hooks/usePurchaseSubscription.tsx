import * as InAppPurchases from 'expo-in-app-purchases';
import React from 'react';
import Purchases from 'react-native-purchases';
import { Context } from '../Context';

const usePurchaseSubscription = () => {
  const context = React.useContext(Context);

  const subscripId = 'diviisubscrip1';

  const successfulPurchase = () => {
    console.log('YAYYYY, SUCCESS!');
    context.setIsSubscribed(true);
  };

  const purchaseSubscription = async (userId: string) => {
    Purchases.setDebugLogsEnabled(true);
    await Purchases.setup('appl_OWPeHBZFZEkiBqpCcFrvIhHSAQx', userId);
    try {
      console.log('trying');
      const offerings = await Purchases.getOfferings();
      console.log(offerings);
      if (offerings.current?.availablePackages !== null && offerings.current?.availablePackages[0]) {
        // Display current offering with offerings.current
        console.log(offerings.current?.availablePackages[0]);
        let packageToBuy = offerings.current?.availablePackages[0];
        console.log('line 72');
        try {
          console.log('line 75');
          const res = await Purchases.purchasePackage(packageToBuy);
          console.log('subscribed woohoo!');
          context.setIsSubscribed(true);
          console.log(res);
        } catch (e: any) {
          console.log('line 84');
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
