import { atomWithStorage } from 'jotai/utils';

export type Hobby =
  | 'Cooking'
  | 'Watch Movies'
  | 'Drinking'
  | 'Reading'
  | 'Traveling';

export const firstNameAtom = atomWithStorage<string>('firstName', '');
export const lastNameAtom = atomWithStorage<string>('lastName', '');
export const ageAtom = atomWithStorage<number>('age', 0);

export const hobbiesAtom = atomWithStorage<Hobby[]>('hobbies', []);
