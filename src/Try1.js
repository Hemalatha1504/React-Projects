import React from "react";
import './Try.css';
function Try1(item){
    return(
    
        <div className="card">
            <div key={item.item.char_id}>
            
                <img src={item.item.img} alt="img" width='300px' height='400px' />
            </div>
        </div>
    
      
    )
}
export default Try1;