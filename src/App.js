
import Container from "./Container/Container";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
   return (
   <>
   <ThemeProvider>
    <Container/>
    </ThemeProvider>
   </>
   
  );
}

export default App;
