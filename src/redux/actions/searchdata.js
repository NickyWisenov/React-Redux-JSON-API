import { CALL_API } from '../middleware/api';

export function searchdata() {
  return {
    [CALL_API]: {
      endpoint: '/data',
    },
  };
}
