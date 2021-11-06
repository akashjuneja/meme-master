import axios from 'axios';
import React, { useState } from 'react';


const Template = ({template ,setTemplate}) => {
    const [form, setform] = useState({
        template_id:template.id,
        username:process.env.REACT_APP_USERNAME,
        password:process.env.REACT_APP_PASSWORD,
        boxes:[]
    });
    console.log(form)
    console.log(process.env)

    const Generatememe=async ()=>{
        console.log(form)
        let url=`https://api.imgflip.com/caption_image?template_id=${template.id}?username=${form.username}?password=${form.password}`;
        form.boxes.map((x,index)=>{
            url+=`?boxes[${index}][text]=${x.text}`
        })
        console.log(url)
        const getMeme=await axios.post(url)
        console.log(getMeme)
        setTemplate(getMeme)

    }
    return (
        <div>
            <div>
            <h1>{template.name}</h1>
            <img src={template.url}></img>
            {[...Array(template.box_count)].map((_,index)=>{
               return( <input type="text"  placeholder={`Enter meme caption ${index}`}
               onChange={(e)=>{
                    const newboxes=form.boxes
                    newboxes[index]={text:e.target.value}
                    setform({...form,boxes:newboxes})
               }}/>)
               
            })}
            </div>
            <button onClick={Generatememe}>Generate Meme</button>
            <button onClick={()=>{
               setTemplate(null)
            }}>Choose template</button>
        </div>
    );
}

export default Template;
