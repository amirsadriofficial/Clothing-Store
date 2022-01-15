// import React from 'react'
// import Carousel from 'react-material-ui-carousel'
// import PropTypes from 'prop-types'

// const SliderComponent = () => {
//   return <div>Slider</div>
// }

// export default SliderComponent

import React from 'react'
import Carousel from 'react-material-ui-carousel'
import SlideOne from '../../images/slide/slide-01.jpg'
// import PropTypes from 'prop-types'
// import Paper from '@material-ui/core/Paper'
// import Button from '@material-ui/core/Button'

const SliderComponent = () => {
  // const items = [
  //   {
  //     name: 'Random Name #1',
  //     description: 'Probably the most random thing you have ever seen!',
  //   },
  //   {
  //     name: 'Random Name #2',
  //     description: 'Hello World!',
  //   },
  // ]

  return (
    <Carousel>
      {/* {items.map((item, i) => (
        <Item key={i} item={item} />
      ))} */}
      {/* <Item> */}
      <img src={SlideOne} alt="SlideOne" />
      {/* </Item> */}
    </Carousel>
  )
}

// function Item(props) {
//   return (
//     <Paper>
//       <h2>{props.item.name}</h2>
//       <p>{props.item.description}</p>

//       <Button className="CheckButton">Check it out!</Button>
//     </Paper>
//   )
// }

export default SliderComponent
