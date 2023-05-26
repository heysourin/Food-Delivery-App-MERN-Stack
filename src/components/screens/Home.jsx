import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Card from '../Card'
import Carousel from '../Carousel'

const Home = () => {
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState()

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    response = await response.json()
    setFoodCat(response[1])
    setFoodItem(response[0])
    // console.log('Food Data', response[0])
    // console.log(response[1])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="mt-20">
        <Carousel />{' '}
      </div>
      <div className="flex flex-col">
        {foodCat.length !== 0 ? (
          foodCat.map((data) => {
            return (
              <React.Fragment key={data._id}>
                <div>{data.CategoryName}</div>
                <hr />
                <div className="flex flex-row">
                  {foodItem.length !== 0 ? (
                    foodItem
                      .filter((item) => item.CategoryName === data.CategoryName)
                      .map((filterItems) => {
                        return (
                          <div key={filterItems._id}>
                            <Card
                              img={filterItems.img}
                              name={filterItems.name}
                            />
                          </div>
                        )
                      })
                  ) : (
                    <div>No such data</div>
                  )}
                </div>
              </React.Fragment>
            )
          })
        ) : (
          <div>wtf</div>
        )}

        {/* <Card /> */}
      </div>
      <div className="bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Home
