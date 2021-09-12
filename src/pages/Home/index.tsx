import './styles.scss';
import {ReactComponent as MainImage} from '../../core/assets/images/main-image.svg';
import ButtonIcon from '../../core/components/ButtonIcon';
import { Link } from 'react-router-dom';
import Formulario from '../../core/components/Formulario';


const Home = () =>(
    <div className="home-container">
        <div className="row home-content">
            <div className="col-6 home-tex">
            <h1 className="text-title" > Meu ICMSS </h1>
               <p className="text-subtitle">
                O aplicativo que te ajuda a calcular o seu ICMS . 
                </p>
                <Formulario />
                <Link to="/catalog" >
                  <ButtonIcon text ="calcular" />
                </Link>
            </div>
            <div className="col-6">
                <MainImage className="main-image"/>
            </div>
            </div>
    </div>

);


export default Home ; 