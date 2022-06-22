import { useEffect, useState } from "react";
import { Container, Words, Welcome, Description } from "./style";
import HomePage from "./pages";
function App() {
  const [changePage, setChangePage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setChangePage(!changePage);
    }, 3000);
  }, []);
  return (
    <div className="App">
      <Container>
        {changePage ? (
          <HomePage />
        ) : (
          <Words>
            <Welcome>SELAMAT DATANG</Welcome>
            <Description>di dunia imajinasi</Description>
          </Words>
        )}
      </Container>
    </div>
  );
}

export default App;
