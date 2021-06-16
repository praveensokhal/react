import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";

function AllProducts(props){
    const [currentPage, setCurrentPage] = useState(0);
   
    if (!localStorage.token ||props.User_role!=="ashu.lekhi0540@gmail.com" && props.User_role !== "kaurswt21@gmail.com" ) {
        toast.warning("Oops you are not permitted to access this")
        props.history.push('/login')
    }
    var [isloading,setLoading]=useState(true)
    var [data, setData] = useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:process.env.REACT_APP_BASE_API_URL+"/allcakes",
            data:JSON
        }).then((response)=>{
            console.log("allPRoducts",response.data.data)
            setData(response.data.data)
            setLoading(false)
        })
    },isloading)
   
    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;
    const currentPageData = data
    .slice(offset, offset + PER_PAGE);
    // .map(({ thumburl }) => <img src={thumburl} />);
const pageCount = Math.ceil(data.length / PER_PAGE);
function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
}
    return(
        <>
        <div className="container card mt-5 p-5">
            <div className="table-responsive ">
            <table className=" table table-striped">
                 <thead>
                    <tr>
                        <th className="text-center ">
                            Cakes
                        </th>
                        <th className="text-center">
                            Created by
                        </th>
                        <th className="text-center">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                   {data.map((value,index)=>{
                       return (
                        <tr>
                        <td >
                            <div className="product-box " >
                                <div className="product-image ml-4">
                                    <img src={value.image} alt="cake" height="100px" width="100px"/>
                                    <div className="d-inline-block">
                                        <span className="d-block ml-5">
                                            <small style={{fontFamily:"cursive",fontSize:"18px"}}> {value.name}</small>
                                        </span>
                                        <span  className="d-block ml-5">
                                            <small style={{fontFamily:"cursive"}}>Rs {value.price} /-</small>
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
                       )
                   })}
                   </tbody>
                </table>

            </div>
           
        </div>
        <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
   
        </>
    )
}
AllProducts = connect(
    function(state,props){
        console.log("Admin form ",state.AuthReducer)
        return{
            User_role:state.AuthReducer?.User_role
        }
    }
)(AllProducts)
// connect
export default withRouter(AllProducts)