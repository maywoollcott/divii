import * as InAppPurchases from 'expo-in-app-purchases';
import React from 'react';
import { Context } from '../Context';

const usePurchaseSubscription = () => {
  const context = React.useContext(Context);

  const subscripId = 'diviisubscrip1';

  const successfulPurchase = () => {
    console.log('YAYYYY, SUCCESS!');
    context.setIsSubscribed(true);
  };

  const purchaseSubscription = async () => {
    await InAppPurchases.connectAsync();
    await InAppPurchases.getProductsAsync([subscripId]);
    InAppPurchases.purchaseItemAsync(subscripId);

    try {
      return await new Promise((resolve, reject) => {
        InAppPurchases.setPurchaseListener(async (result) => {
          switch (result.responseCode) {
            case InAppPurchases.IAPResponseCode.OK:
            case InAppPurchases.IAPResponseCode.DEFERRED:
              console.log('success');
              await successfulPurchase();
              await InAppPurchases.finishTransactionAsync(result.results![0], true);
              await InAppPurchases.disconnectAsync();
              return resolve(true);
            case InAppPurchases.IAPResponseCode.USER_CANCELED:
              console.log('cancelled');
              await InAppPurchases.disconnectAsync();
              return resolve(false);
            case InAppPurchases.IAPResponseCode.ERROR:
              console.log('error');
              await InAppPurchases.disconnectAsync();
              return reject(new Error('IAP Error: ' + result.errorCode));
          }
        });
      });
    } catch (error) {
      console.log(error);
      await InAppPurchases.disconnectAsync();
      throw error;
    }
  };
  return { purchaseSubscription };
};

export default usePurchaseSubscription;
