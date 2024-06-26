import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import Food from './components/Food'
import EventHandling from './components/EventHandling';
import CardList from './components/CardList';
import Counter from './components/Counter';
import Routing from './Routing';
import Navbar from './components/Navbar';
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