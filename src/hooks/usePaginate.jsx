import { createContext, useContext, useState } from 'react';

const PaginateContext = createContext({
  pagenumber: null,
  setpagenumber: () => {},
});

export const PaginateProvider = ({ children }) => {
  const [pagenumber, setpagenumber] = useState(1);
  const value = {
    pagenumber,
    setpagenumber,
  };

  return (
    <PaginateContext.Provider value={value}>
      {children}
    </PaginateContext.Provider>
  );
};

export const usePaginate = () => {
  const { setpagenumber, pagenumber } = useContext(PaginateContext);

  if (!setpagenumber) {
    throw new Error(
      'useAddProduct must be used within a AddProductProvider'
    );
  }
  return { setpagenumber, pagenumber };
};
