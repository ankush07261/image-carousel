import './co.css'
import React, { useState } from 'react';

const image4 = "https://imgs.search.brave.com/59ieY8QAnNCf9h7w0hYsyXaGg11ByNf_YhNn-gduZxM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pc28u/NTAwcHguY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE1LzAz/L3RpcHNldmdlbnkx/LmpwZWc"
const image2 = "https://imgs.search.brave.com/x7lL598SvNQD1bj9JeauRkVITedg2ceXgtR9spXL5jk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9waXhh/YmF5LmNvbS9nZXQv/ZzJjNjIzMTIxZDM0/MjhhYjNiNzNkM2Rh/ZjUzZWE0YjM1NjUw/YTA2NzQxNTUxNjMx/Mzc5Y2JmNGIxODZm/OWQ1YzE2MmJhZTM4/NzI2NTcyYzhjM2Mz/MDU0OWNjZjQxZjc0/ZmY5Y2E5NDk0ZTVj/ZWNkNjdhOWMyNTlj/NDIzZDQxYTE4XzY0/MC5qcGc"
const image3 = "https://imgs.search.brave.com/GE5fT1WYc-94DYv-xU2xK5UjJc3NIm38TPd6s5UuO_8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2MxL2Zj/L2Q2L2MxZmNkNjg5/ZjQ5Njc5MDNlZTEw/NDhjZTllZjdkYmQ5/LmpwZw"
const image1 = "https://imgs.search.brave.com/2rAOVXsmAVkKOsp6rXmsBtRy6MeN8c6qkQkzMPTQJMk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q2LzNl/Lzg0L2Q2M2U4NGUy/YmRhMTBiODVjNzhj/ZDJiYTM3MWU4ZjEw/LmpwZw"
const image5 = "https://imgs.search.brave.com/DpZom8Ij_lKJZ5Sf3_p1KFG4TP1t4YxdUlh1LpaFEvY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjI5/MzQyNTEwL3Bob3Rv/L2luZmluaXRlLXJh/bmRvbS1udW1iZXJz/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVh6aTd6YkNPLURz/UnJfSnhVVVJ5OFV5/T1JQNUMyXzNuTEJp/c3gwRXJzaDQ9"

function Co() {
    const [index, setIndex] = useState(0);
    
    let data = [
        {
            id : 1,
            url : image1
        },
        {
            id : 2,
            url : image2
        },
        {
            id : 3,
            url : image3
        },
        {
            id : 4,
            url : image4
        },
        {
            id : 5,
            url : image5
        },
    ]

    let eachImage = [data[index]];

    let prevHandler = () => {
        if(index <= 0){
            setIndex(data.length);
        }
        setIndex((prev) => prev - 1);
    }
    let nextHandler = () => {
        if(index === data.length - 1){
            setIndex(-1)
        }
        setIndex((next) => next + 1)
    }
    
  return (
    <div className='con'>
        <h1 className='title'>Welcome to Image Carousel</h1>
       {
        eachImage.map((item) => (
            <img src={item.url} alt="" width={300} height={300} />
        ))
       }
        <div className='btns'>
            <button onClick={prevHandler}>prev</button>
            <button onClick={nextHandler}>next</button>
        </div>
    </div>
  )
}

export default Co
