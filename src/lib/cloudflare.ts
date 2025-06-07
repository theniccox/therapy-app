import { D1Database } from '@cloudflare/workers-types';
import { cookies } from 'next/headers';

export function getCloudflareContext() {
  return {
    env: {
      DB: {} as D1Database
    }
  };
}
