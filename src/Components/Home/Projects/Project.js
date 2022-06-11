import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
const Project = () => {
    const [loader,setLoader]=useState(true)
    const { id } = useParams()
    // const [selected,setSelected]=useState({})
console.log(id);
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("/fakeData.json")
            .then(res => res.json())
            .then(data => {
             setProjects(data)
             setLoader(false)
            })
    }, [id])
    console.log(projects);
   let selected= projects.find(p => p.id == id)

if(loader){
    return <p>Loading...</p>
}

    return (
        <div style={{ color: 'white' }}>
            <div className='d-flex  justify-content-center mt-5'>
                <div>
                    <h1 className='text-center'>{selected?.name} <span> Details</span></h1>
                    <a href={selected?.site} target="blank" className='btn btn-outline-primary'>Preview {selected?.name} </a>
                    <a href={selected?.client} target="blank" className='btn btn-outline-primary'>Client side Code </a>
                    <a href={selected?.server} target="blank" className='btn btn-outline-primary'>Server Side Code </a>
                    <h3 className='my-5'>Some Screenshots of {selected?.name}</h3>
                </div>

            </div>
            <div className='row row-cols-1 row-cols-md-3 container mx-auto'>

                {
                    selected?.images.map((img,index)=>{
                        return <img src={img} alt="" key={index} className="p-3"/>
                    })
                }
            </div>
        </div>
    );
};

export default Project;