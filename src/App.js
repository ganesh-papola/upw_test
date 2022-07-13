import "./App.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import Routes from "./routes/routes";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";
import { LoaderHoc } from "./components";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HelmetProvider>
          <LoaderHoc>
            <Routes />
          </LoaderHoc>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
