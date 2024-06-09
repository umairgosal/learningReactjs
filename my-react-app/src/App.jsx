import Header from './Header'
import Card from './Card'
import Footer from './Footer'
import Food from './Food'

function App() {

  return(
    <>
    <Header></Header>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Food name="spongebob" age={30}></Food>
    <Footer></Footer>
    </>
  );
}

export default App
