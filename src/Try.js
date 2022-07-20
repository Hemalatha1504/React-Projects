import React,{useState,useEffect} from "react";
import './Try.css';

import Logo from './img/logo.png'

function Try(){
        const [text, setText] = useState('')
        const [items, setItems] = useState([])
      
        useEffect(() => {
            const fetchItems = async () => {
             
              const result = await fetch(
                `https://www.breakingbadapi.com/api/characters?name=${text}`
              );
              const result1=await result.json();
        
              console.log(result1);
              setItems(result1);
            
            }
        
            fetchItems()
          }, [text]);

        const onChange = (e) => {
            const q=e.target.value;
          setText(q);
      
        }
      
        console.log(text)
    return(
       
        <div className="box">
            <header className='h1'>
                <img src={Logo} alt='img' width='250px' height='100px'/>
           
            <section className='search'>
                <form>
                    <input
                    type='text'
                    className='form-control'
                    placeholder='Search characters'
                    value={text}
                    onChange={onChange}
                    autoFocus
                    />
                </form>
            </section>
            </header>
               
        <div className="box1">
          
                  {text===items.name ? 
                  <div className="card">
                   
                     <div key={items.char_id}>
                         <h1>{console.log(items.name)}</h1>
                     <img src={items.img} alt="img" width='300px' height='400px' />
                     </div> 
                   </div>  
                    : <div className="card">
                    { items.map((item)=>(
                     

                     <div key={item.char_id}>
            
                <img src={item.img} alt="img" width='300px' height='400px' />
                </div>
                      ))}
                      </div>
                     }   
            
        </div>
        </div>
    )
}

export default Try;