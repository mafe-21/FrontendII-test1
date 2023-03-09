import FormPet, {formResult1} from './Form'
import Card from './Card'

const user = "Maria";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  console.log(formResult1)
  
  return (
    <div className="App">
      <h1>Register your Pet</h1>
      <FormPet />
      {formResult1 && <Card user={user}/>}
    </div>
  );
}

export default App;
