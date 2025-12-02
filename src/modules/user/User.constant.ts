import { Prisma, User as TUser } from '@/utils/db';

/**
 * Use in user search functionality
 */
export const userSearchableFields = [
  'name',
  'email',
  'id',
] satisfies (keyof TUser)[];

/**
 * use in own user data retrieval omit fields
 */
export const userSelfOmit = {
  password: true,
  otp_id: true,
  stripe_account_id: true,
  stripe_customer_id: true,
  subscription_expires_at: true,
  fb_id: true,
  google_id: true,
  fcm_token: true,
  web_push_subscription: true,
} satisfies Prisma.UserOmit;

/**
 * use default omit fields for all user roles
 */
export const userDefaultOmit = {
  ...userSelfOmit,
  email: true,
  is_verified: true,
  is_active: true,
  is_admin: true,
  updated_at: true,
  created_at: true,
  balance: true,
  is_stripe_connected: true,
} satisfies Prisma.UserOmit;
