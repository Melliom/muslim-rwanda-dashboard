export interface Iexample {
  changeName: {
    currentName: string;
    error: string;
    loading: boolean;
  };
}

export const example: Iexample = {
  changeName: {
    currentName: 'Someone',
    error: '',
    loading: false,
  },
};
