import { useEffect, useState } from "react";
import { withRouter } from "react-router"

function Products(props){
    // useState
// useEffect
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(8);
    const [pageCount, setPageCount] = useState(0);
    const  [slice, setSlice] = useState([]);
     
    const handlePageClick = (e) => {
       // alert(e.selected)
        const selectedPage = e.selected;
        setOffset(selectedPage);
      };

      useEffect(() => {
          if( props.data.length<8){
            setSlice(props.data);
            return;
          }
        setSlice(props.data.slice(offset*perPage, perPage*(offset+1)));
      },[offset, props.data]);

    return (
        <>
         <tr>
                        <td >
                            <div className="product-box " >
                                <div className="product-image ml-4">
                                    <img src={props.value.image} alt="cake" height="100px" width="100px"/>
                                    <div className="d-inline-block">
                                        <span className="d-block ml-5">
                                            <small style={{fontFamily:"cursive",fontSize:"18px"}}> {props.value.name}</small>
                                        </span>
                                        <span  className="d-block ml-5">
                                            <small style={{fontFamily:"cursive"}}>Rs {props.value.price} /-</small>
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                        </td>
                        <td className="text-center p-5">
                            <>
                                <div className="creator-details ">
                                    <strong>   created by : Praveen</strong>
                                    <div className="d-block">
                                        created on : 21/1/21
                                    </div>
                                </div>
                            </>
                        </td>
                        <td className="text-center p-5">
                            <div className="products-actions">
                                <span><a href="/admin/cakes/update" ><button className="btn btn-primary"><i class="fa fa-wrench" aria-hidden="true"></i></button></a></span>
                                <span><a href="/admin/cakes/delete" ><button className="btn btn-primary ml-5"><i class="fa fa-trash" aria-hidden="true"></i></button></a></span>
                            
                            </div>
                        </td>
              
                    </tr>
        </>
    )
}
export default withRouter(Products)