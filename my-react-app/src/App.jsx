import Header from './Header'
import Card from './Card'
import Footer from './Footer'
import Food from './Food'
import EventHandling from './EventHandling';
import CardList from './CardList';
import Counter from './Counter';
import Routing from './Routing';
import Navbar from './Navbar';
import store from './Store/store'
import { Provider } from 'react-redux';


function App() {
  const vegetables = [
    {id:6, name:"carrot", calorie:35},
    {id:7, name:"spinach", calorie:40},
    {id:8, name:"cucumber", calorie:45},
    {id:9, name:"broccoli", calorie:50}
  ];

  return(
    <Provider store={store}>
    {
    /*
    <CardList></CardList>
    <EventHandling /> */}
    <Routing />
    {/* <Food name="spongebob" age={30} items={vegetables}></Food>
    <Counter />
    <Footer></Footer> */}
    </Provider>
  );
}

export default App