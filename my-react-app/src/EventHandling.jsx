import { useState } from "react";

// html structure
// setting & defining states
// functions to handle changes

export default function EventHandling(){

    const [answer, setAnswer] = useState('');
    const [status, setStatus] = useState('typing');
    const [error, setError] = useState(null);
    
    if(status === "success"){
        return <h2>correct!</h2>
    }

    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');
        try{
        await submitForm(answer);
        setStatus('success')
        }
        catch(err){
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextChange(e){
        setAnswer(e.target.value);
    }

    return(
        <>
        <div className="text-center rounded-md border-2 block ml-60 mr-60 shadow-xl">
        <h1 className="text-center">quiz form</h1>
        <p>What is your name?</p>
        <form onSubmit={handleSubmit}>
            <textarea value={answer}
                      onChange={handleTextChange}
                      disabled={status === 'submitting'} />
            
            <br />
            <button disabled={status === 'submitting' || answer.length === 0}>
                submit
            </button>
            {error !== null && <p className="Error">{error.message}</p>}
        </form>
        </div>
        </>
    );
}

function submitForm(answer){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
        
        let ans = answer.toLowerCase() !== 'gosal'  
        if(ans){
            reject(new Error('try again'));
        } else{
            resolve();
        }
        }, 1500);
    }
);
}




// function EventHandling(){

//     const handleClick = () => {
//         window.alert("Ouch!");
//     }

//     return(
//         <button className="bg-zinc-400" onClick={handleClick /*callback*/}>
//             click me
//         </button>
//     );
// }

// export default EventHandling