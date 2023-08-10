import AppRouter from "./AppRouter";
import { CartProvider } from "./components/context/CartContext";
import { NavigationProvider } from "./components/context/NavigationContext";

function App() {
  return (
    <CartProvider>
      <NavigationProvider>
        <AppRouter />
      </NavigationProvider>
    </CartProvider>
  );
}

export default App;
