import './styles.scss';
import '../../../app.scss';
import {ReactComponent as ProductImage} from '../../../core/assets/images/product.svg';

type Props = {
    text : String ; 
}

const ProductCard = ({text}:Props) =>(
    <div className= "card-base border-radius-10 product-card">
        <ProductImage/>
        <div className="product-info">
            <h6 className="product-name">{text}</h6>
            <div className="product-price-container">
            </div>
        </div>

    </div>
);




export default ProductCard; 