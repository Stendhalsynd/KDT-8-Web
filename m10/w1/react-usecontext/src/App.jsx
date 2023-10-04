import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import Provider from "./Provider";

function App() {
  return (
    <div style={{ backgroundColor: "orange" }}>
      <Provider>
        <LanguageSelector />
        <ThemeSelector />
      </Provider>
    </div>
  );
}

export default App;
