import Head from "next/head";
import { useState, useEffect } from "react";
import Tarjeta from "../components/tarjeta";

const AddComponent = () => {
  const [likes, setLikes] = useState(0);
  const elementos = [
    { texto: "kjvbkjsavsa vlashv " },
    { texto: "sabdsbgs asgsa" },
  ];
  const [elementos2, setElementos2] = useState([
    { texto: "kjvbkjsavsa vlashv " },
    { texto: "sabdsbgs asgsa" },
  ]);

  //useEffect(() => setElementos2([]), []);

  function addLike() {
    setLikes(likes + 1);
  }

  const addElemento = (tex) => {
    const newElementos2 = [...elementos2, { texto: tex }];

    setElementos2(newElementos2);
  };

  return (
    <div className="container">
      <Head>
        <title>INFO104 Agregar Componente</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Agregar un componente sobre la marcha</h1>
        <div className="description">
          <button id="botonLikes" onClick={addLike}>
            Likes ({likes})
          </button>
          <hr />
          <button
            id="botonTarjeta"
            onClick={() => addElemento("vsava" + likes)}
          >
            Agregar Tarjeta
          </button>
        </div>
        {elementos2.map((item, index) => (
          <Tarjeta texto={item.texto} />
        ))}
      </main>
    </div>
  );
};
export default AddComponent;
