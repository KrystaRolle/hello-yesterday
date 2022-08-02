import { useState } from "react"
import { Quizzes } from "../quizzes/Quizzes"
import { Results } from "../results/Results"

export const Choices = (choices) => {
   const [sliderValue, setSliderValue] = useState()
 return  <>
  <Quizzes setterFunction = { setSliderValue } />
  <Results sliderValueState = { sliderValue } />
  </>
}

// export const Choices = (choices) => {
//     //  const [useChoice, setChoice] = useState(0)
      
//       console.log(choices)
//       return <>
//           {choices.score}
//       </>
  
//   }