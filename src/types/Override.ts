/**
 * Allows to override keys in the original object properties
 */
export type Override<Original, Over> = Omit<Original, keyof Over> & Over;
