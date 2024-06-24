
function EventHandling(){

    const handleClick = () => {
        window.alert("Ouch!");
    }

    return(
        <button className="bg-zinc-400" onClick={handleClick /*callback*/}>
            click me
        </button>
    );
}

export default EventHandling