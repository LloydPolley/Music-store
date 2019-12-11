import React from 'react';
import {  } from 'react-redux';
import ProductForm from '../../components/admin/ProductForm';



const ProductEditor = (props) => {
    return(
        <div>
            <h1>Product Page - {props.match.params.id}</h1>
            <ProductForm editorId={props.match.params.id}/>
        </div>
    )
}
export default ProductEditor;
// export default connect()();