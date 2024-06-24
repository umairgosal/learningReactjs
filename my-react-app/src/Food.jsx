import PropTypes from 'prop-types'

function Food(props){

    const itemList = props.items;
    //  fruits object
    const fruits = [{id: 1, name:'apple', calories: 95}, 
                    {id: 2, name:'banana', calories: 200}, 
                    {id: 3, name:'mango', calories: 150}, 
                    {id: 4, name:'guava', calories: 320}, 
                    {id: 5, name:'pinepple', calories: 180}];

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}</li>)
    const listItems2 = itemList.map(vegetable => <li    key={vegetable.id}>
                                                        {vegetable.name}: &nbsp;
                                                        {vegetable.calorie}</li>);
    return(
        <div>

            <p className="text-center bg-indigo-400 font-sans-serif text-3xl">Name: {props.name}</p>
            <ol className='text-3xl font-sans-serif bg-slate-500'>{listItems}</ol>
            <ol className='text-3xl font-sans-serif bg-slate-400'>{listItems2}</ol>
        </div>
    );
}

// this ensures that the entered value is of intended type.
Food.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}
Food.defaultProps = {
    name: "Guest",
    age: 0,
}



export default Food 