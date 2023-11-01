
import './App.css';
import Testimony from './components/Testimony';
import { AiFillStar } from 'react-icons/ai';
import { GiAnglerFish } from 'react-icons/gi';
import { GiChessQueen } from 'react-icons/gi';




function App() {
  return (
    <div className="App">

      <div className='main-container'>

        <h1 >Qué cuentan nuestras gatas sobre ellas mismas y cómo  puntúan a sus esclavos humanos.</h1>
        <Testimony
          image='asha1'
          name='Asha'
          nickname='Pazuzu'
          testimony='Me gusta el brócoli e injustamente cada vez que se escucha un ruido de algo que se rompe gritan mi nombre, siempre soy yo pero ellos nunca lo comprueban, creo que son racistas.'
          star={<>
            <AiFillStar /><AiFillStar /><AiFillStar /> <GiAnglerFish /><AiFillStar /><GiAnglerFish /><AiFillStar /><AiFillStar /></>}


        />
        <Testimony
          image='momo2'
          name='Momo'
          nickname='Reina Momo'
          testimony='Nací en la realeza es por eso que todos son mis subditos, humanos o gatos, da igual, todos mios, yo mando, soy Momo la magnánima y los odio por igual.'
          star={<><GiChessQueen /> Viva MOMO <GiChessQueen />

          </>}

        />
        <Testimony
          image='coco2'
          name='Coco'
          nickname='Coco dos niveles'
          testimony='¿Te ibas a sentar ahí? ¡Qué casualidad! ¡YO TAMBIÉN! Entre mis cosas favoritas está dormir encima de la ropa de mis humanos, dormir en el sofá, dormir encima de cualquier zapatilla que pille y dar muchas vueltas sobre mí misma para coger la postura perfecta para dormir.   '
          star={<>
            <AiFillStar />
          </>}

        />
        {/* <Testimony
          image=''
          name=''
          nickname=''
          testimony=''
          star={<>
          </>}

        /> */}
        {/* <Testimony
          image=''
          name=''
          nickname=''
          testimony=''
          star={<>
            </>}

        /> */}
      </div>

    </div>
  );
}

export default App;
