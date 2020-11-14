import MyComponent from "./components/MyComponent";
import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <div>
      <StoreProvider>
        <MyComponent />
      </StoreProvider>
    </div>
  );
}

export default App;
