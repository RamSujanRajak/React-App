// import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';
import NewProduct from './components/NewProduct';

function App() {
  const resp = [
    {
      itemName : "ram",
      itemDate : "10",
      itemMonth : "march",
      itemYear : "2001"
    },
    {
      itemName : "rahul",
      itemDate : "12",
      itemMonth : "april",
      itemYear : "2004"
    },
    {
      itemName : "Rohan",
      itemDate : "14",
      itemMonth : "jun",
      itemYear : "2006"
    },
  ]

  return (
    <Card>
      <div>
        {/* <NewProduct></NewProduct> */}
        <Item name = {resp[0].itemName} >
          hello mai ek child hhu first item ka 
        </Item>
        <ItemDate day = {resp[0].itemDate} month= {resp[0].itemMonth} year = {resp[0].itemYear} ></ItemDate>

        <Item name = {resp[1].itemName}></Item>
        <ItemDate day = {resp[1].itemDate} month= {resp[1].itemMonth} year = {resp[1].itemYear} ></ItemDate>

        <Item name = {resp[2].itemName}></Item>
        <ItemDate day = {resp[2].itemDate} month= {resp[2].itemMonth} year = {resp[2].itemYear} ></ItemDate>
        <div className="App">
          <h1>hello bhai ram </h1>
        </div>
      </div>
    </Card>
  
  );
}

export default App;
