import profilePic from './assets/myProfilePic.png'  


function Card(){
    let name = 'umair gosal'

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="my_profile_pic" />
            <h2 className="card-name">Umair Gosal</h2>
            <p className="card-text">I am an undergraduate @ NUST studying Software Engineering</p>
        </div>
    );
}

export default Card