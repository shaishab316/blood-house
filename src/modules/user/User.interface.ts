import type z from 'zod';
import { UserValidations } from './User.validation';

/**
 * User registration payload
 */
export type TUserRegister = z.infer<
  typeof UserValidations.userRegister
>['body'];

/**
 * Edit user profile payload
 */
export type TUserEdit = z.infer<typeof UserValidations.editProfile>['body'];

/**
 * Subscribe to web push notifications payload
 */
export type TSubscribeWebPush = z.infer<
  typeof UserValidations.subscribeWebPush
>['body'] & { user_id: string };
