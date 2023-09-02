const Header = (props) => {
  console.log(props);

  return (
    <div>
      <p>The course is {props.course}</p>
    </div>
  )

}

const Part1 = (props) => {
  console.log(props);

  return (
    <div>
      <p>The first part of the React course is {props.part1} and the number of exercises is {props.exercises1}</p>
    </div>
  )
}

const Part2 = (props) => {
  return (
    <div>
      <p>
        The second part of the React course is {props.part2} and the number of exercises is {props.exercises2}
      </p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
      <p>
      The second part of the React course is {props.part3} and the number of exercises is {props.exercises3}
      </p>
    </div>
  )
}


const Content = (props) => {
  console.log(props);

  return (
    <div>
      <Part1 part1={props.part1} exercises1={props.exercises1}/>
      <Part2 part2={props.part2} exercises2={props.exercises2}/>
      <Part3 part3={props.part3} exercises3={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props);

    return (
      <div>
        <p>
          The total number of exercises is {props.exercises1 + props.exercises2 + props.exercises3}
        </p>
      </div>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1} 
      part2={part2} exercises2={exercises2}
      part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App
