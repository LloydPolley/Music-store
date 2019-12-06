import React from 'react';
import { connect } from 'react-redux';
import AdminProductForm from './AdminProductForm';



const AdminProductEditor = (props) => {
    return(
        <div>
            <h1>Product Page - {props.match.params.id}</h1>
            <AdminProductForm editorId={props.match.params.id}/>
        </div>
    )
}
export default AdminProductEditor;
// export default connect()();