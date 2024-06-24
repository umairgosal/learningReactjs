import Header from './Header'
import Card from './Card'
import Footer from './Footer'
import Food from './Food'
import EventHandling from './EventHandling';
import CardList from './CardList';
import Counter from './Counter';

function App() {

  const vegetables = [
    {id:6, name:"carrot", calorie:35},
    {id:7, name:"spinach", calorie:40},
    {id:8, name:"cucumber", calorie:45},
    {id:9, name:"broccoli", calorie:50}
  ];

  return(
    <>
    <Header></Header>
    <CardList></CardList>
    <EventHandling />
    <Food name="spongebob" age={30} items={vegetables}></Food>
    <Counter />
    <Footer></Footer>
    </>
  );
}

export default App
