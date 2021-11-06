import React from 'react';

const Meme = ({meme ,setTemplate}) => {
    return (
        <div>
            {meme.map((m,index)=>{
      return(
        <div>
          <img src={m.url}  style={{width:"30%",float:"left",padding:"20px" ,border:"1px solid black"}} onClick={()=>{
                setTemplate(m)
          }} />
        </div>
      )
    })}
        </div>
    );
}

export default Meme;
