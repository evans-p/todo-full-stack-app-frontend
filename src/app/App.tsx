import ThemeProvider from "../providers/ThemeProvider";
import CredentialProvider from "../providers/CredentialProvider";
import DataProvider from "../providers/DataProvider";
import Routing from "../routes/Routing";

const App = () => {
  return (
    <ThemeProvider>
      <CredentialProvider>
        <DataProvider>
          <Routing />
        </DataProvider>
      </CredentialProvider>
    </ThemeProvider>
  );
};

export default App;
