import React, { } from "react";
import { Link } from "react-router-dom";

const AdminProductListItem = props => {

  // const [admin, setAdmin] = useState('');
  // useEffect(()=>{
  //   setAdmin(props.admin)
  // })

  return (
    <div className="productListItem">
      <Link to={`editProduct/${props.id}`}>
        <h1>{props.productName}</h1>
        <p>{props.productPrice}</p>
      </Link>
      <button
            onClick={() => {
              props.removeProduct(props.id);
            }}>Remove Product
          </button>
    </div>
  );
};

export default AdminProductListItem;
