import { useNavigate } from "react-router-dom";
function UI(){
   const Navigate= useNavigate();
   const Home= ()=>{
      Navigate("/");
   }
   const Videos= ()=>{
      Navigate("/Video");
   }
   return(
        <div className="Nav">

         <h1 onClick={Home} style={{cursor: 'pointer'}} className="Nav-text">
            Home 
         </h1>
            
         <h1> &nbsp;</h1>
         <h1 onClick={Videos} style={{cursor: 'pointer'}} className="Nav-text">
            Videos
         </h1>

         
        </div>
     );
}

export default UI;