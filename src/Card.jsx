//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
  return (
    <div>
      <h1>Hola {props.user}</h1>
      <h2>Sabemos que tu color favorito es</h2>
      <button>#37BF21</button>
    </div>
  );
}

export default Card;
