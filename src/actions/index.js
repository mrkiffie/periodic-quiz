export * from './quiz';

export const LOAD_COUNTRY = 'LOAD_COUNTRY';
export const TOGGLE_MENU = 'TOGGLE_MENU';

export const loadCountry = (iso = null) => ({
  type: LOAD_COUNTRY,
  payload: iso,
});

export const toggleMenu = (open = false) => ({
  type: TOGGLE_MENU,
  payload: open,
});
