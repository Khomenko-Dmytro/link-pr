import { socialMap } from './constants';

export const getSocialImage = (text) => {
  const key = text.toLowerCase();

  return socialMap[key] ? socialMap[key] : null;
}