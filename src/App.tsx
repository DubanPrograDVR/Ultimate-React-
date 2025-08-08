import "./components/Card.tsx";
import Card, { CardBody } from "./components/Card.tsx";

function App() {
  return (
    <Card>
      <CardBody titulo="Hola Mundo" text="este es un componente" />
    </Card>
  );
}

export default App;
