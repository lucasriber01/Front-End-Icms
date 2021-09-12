import { Link, useParams } from 'react-router-dom';
import './styles.scss';

import  {ReactComponent as ArrowIcon} from '../../../core/assets/images/arrow.svg';
import  {ReactComponent as ProductImage} from '../../../core/assets/images/product.svg';



type ParamsType = {
    productId:string;
}


const ProductDetails = () =>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {productId} = useParams<ParamsType>();
    return(
        <div className="product-details-container">
         <div className="card-base border-radius-20 product-details">
             <Link to= "/catalog" className="product-details-link">
              <ArrowIcon className="icon-goback"/>
              <h1 className="text-goback" >VOLTAR</h1>
            </Link>
            <div className="row" >
                <div className="col-6 pr-5">
                       <div className = "product-details-card text-center">
                           <ProductImage className = "product-details-image"/>
                       </div>
                       <h1 className="product-details-name" >Manuais ICMS  </h1>
                       <div className="product-price-container">
                </div>
                    </div>
                <div className="col-6 product-details-card">
                    <h1 className= "text-center n2">O que é Substituição Tributária?</h1>
                    <p>Substituição tributária é a transferência da obrigação do recolhimento de um imposto de uma ou várias pessoas que estão em uma cadeia de produção.

Recolhimento? Cadeia de produção? Vamos te explicar: o recolhimento do ICMS ST é a antecipação do ICMS que a empresa (comércio) do seu cliente pagaria ao vender aquela mercadoria ao consumidor final. Portanto, o pagamento do ICMS ST não é uma despesa para a empresa que recolhe. Por quê? Pois o valor que vai ficar destacado na nota fiscal no campo “Substituição Tributária”, será reembolsado para essa mesma empresa que recolheu o imposto no recebimento desta venda.</p>
                    </div>

            </div>
         </div>
        </div>
    );
};




export default ProductDetails;