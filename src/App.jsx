import AppRouter from "./AppRouter";
import { NavigationProvider } from "./components/context/NavigationContext";

function App() {
  return (
    <NavigationProvider>
      <AppRouter />
    </NavigationProvider>
  );
}

export default App;
