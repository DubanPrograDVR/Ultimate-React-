import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card(props: Props) {
  const { children } = props;
  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBody {
  titulo: string;
  text: string;
}

export function CardBody(propiedades_titulo: CardBody) {
  const { titulo, text } = propiedades_titulo;
  return (
    <>
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}
