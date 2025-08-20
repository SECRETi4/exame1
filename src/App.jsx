import './App.css'
import Card from './Components/Card'
import data from '../public/data'

function App() {
  return (
    <div className='body'>
        <header>
          <h1>Exclusive</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
            </ul>
          </nav>
        </header>
        <hr />  
        <div className="text">
        <h2>Products</h2>
        <button className="btn">Move All To Bag</button>
      </div>
      <div className="card-ota">
        {data.map((odam)=>{
          return  <Card key={odam.id} img={odam.img} name={odam.name} price={odam.price}></Card>
        })}
      </div>
    </div>
  )
}

export default App
