import './styles.scss';


type Props = {
    text : String ; 
}

const Card = ({text}:Props) =>(

<div className="card w-75">
  <div className="card-body n2">
    <h5 className="card-title">{text}</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/" className="btn btn-primary">Editar</a>
  </div>
</div>
);



export default Card; 