import Cardlist from "./Cardlist";
import Coursel from "./Coursel";


function Home (){

    return (
        <>
       
        <div className="full-container bg-light" style={{"backgroundColor":"#666"}}>
        <Coursel></Coursel>
        <Cardlist></Cardlist>
        </div>
        </>
    )

}
export default Home