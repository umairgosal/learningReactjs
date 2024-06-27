import axios from "axios";
import { useState, useEffect } from "react";


function FetchData(){
    const [myData, setMyData] = useState([])
    async function GetData(){
            const res = await axios.get('https://api.sampleapis.com/futurama/info')
            setMyData(res.data);
        }
        
        useEffect(()=> {
            GetData();
        })

    return(
        <div className="max-w-max p-6 bg-white border border-gray-200 rounded-2xl m-5 shadow-md dark:bg-emerald-800 dark:border-gray-700">
        <h1>API Data</h1>
        {myData.map((post)=>{
            const {synopsis, yearsAired, creators, id} = post;
            return(
                <div key={id}>
                    {/* <h2>{creators.map((na)=>{
                        const [id, url] = na;
                        return(
                            <div key={id}>
                                <h3>{url}</h3>
                            </div>
                        )
                    })}</h2> */}
                    <p>{yearsAired}</p>
                    <p>{synopsis}</p>
                </div>
            )
        })}
        </div>
    );
    // axios.get('https://api.sampleapis.com/futurama/info')
    // .then((response)=>{
    //     console.log(response.data)
    // })  
    
//     axios.post('https://api.sampleapis.com/futurama/info', {
//         synopsis: 'umair',
//         yearsAired: 'gosal',
//         creators: ''
//     },
// )
//     .then((response)=>{
//         console.log(response.data)
//     }) 
}

export default FetchData






