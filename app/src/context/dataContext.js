import { createContext } from "react";

/**
 * Context is an interface / definition of the data
 * should not have implementations
 */

const DataContext = createContext({
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export default DataContext;
