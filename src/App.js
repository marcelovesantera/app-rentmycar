import Global from "./styles/Global";
import RoutesMain from "./routes";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Providers from "./components/Providers";

function App() {
  return (
    <div className="App">
      <Providers>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              padding: "16px",
              "font-family": "Poppins",
            },
          }}
        />
        <Global />
        <RoutesMain />
      </Providers>
    </div>
  );
}

export default App;
