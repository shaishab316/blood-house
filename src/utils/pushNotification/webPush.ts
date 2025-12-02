import config from '@/config';
import webPush from 'web-push';

webPush.setVapidDetails(
  `mailto:${config.email.support}`,
  config.pushNotification.vapidKeys.publicKey,
  config.pushNotification.vapidKeys.privateKey,
);

export type TWebPushPayload = {
  title: string;
  body: string;
  icon?: string;
  url?: string;
  actions?: Array<{
    action: string;
    title: string;
    icon?: string;
  }>;
  tag?: string;
  data?: Record<string, any>;
};

export const sendWebPushNotification = async (
  subscription: webPush.PushSubscription,
  payload: TWebPushPayload,
): Promise<void> => {
  await webPush.sendNotification(subscription, JSON.stringify(payload));
};
