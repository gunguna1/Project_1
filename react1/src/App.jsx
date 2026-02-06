import Card from "./components/card"
export default function App() {

    return (
    <>
     <div className="p-6">
      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1m1IFM8IB3tGx9FYfaUJ7rzaOW3_5ORbhcQ&s"
        name="virat kohli"
        subtitle="Indian cricketer"
      />
        <Card
        img="https://i.cdn.newsbytesapp.com/images/l48920250428130505.jpeg"
        name="Run machine"
        subtitle="King of cricket"
        />
    </div>
    
    </>
  )
}
