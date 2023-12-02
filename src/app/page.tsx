import React from 'react'
//1. Import Area

//2. Define Area
//A variable defined outside the function defination is called global varible;
const name = 'Anil Dollor' //This is a global variable
function Home() {
  //Whenver we define a variable inside a function body then it will be local variable
  const mission = 'OKLABS' // This is a local variable
  return (
    <main>
      <h1>
        Hello {name} {mission}
      </h1>
    </main>
  )
}

//3. Export Area
export default Home
