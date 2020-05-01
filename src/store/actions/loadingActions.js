export const IS_LOADING = 'IS_LOADING';
export const IS_NOT_LOADING = 'IS_NOT_LOADING';

export const isLoading = () => {
  return {
    type: IS_LOADING
  }
};

export const isNotLoading = () => {
  return {
    type: IS_NOT_LOADING
  }
};
