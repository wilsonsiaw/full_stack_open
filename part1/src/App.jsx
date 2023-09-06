const Header = (props) => {

  return (
    <div>
      <p>The course is {props.course}</p>
    </div>
  )

}

const Part1 = (props) => {

  return (
    <div>
      <p>The first part of the React course is {props.parts} and the number of exercises is {props.exercises}</p>
    </div>
  )
}

const Part2 = (props) => {
  console.log(props);

  return (
    <div>
      <p>
        The second part of the React course is {props.part2} and the number of exercises is {props.exercise2}
      </p>
    </div>
  )
}

const Part3 = (props) => {

  return (
    <div>
      <p>
      The third part of the React course is {props.part3} and the number of exercises is {props.exercise3}
      </p>
    </div>
  )
}


const Content = (props) => {

  return (
    <div>
      <Part1 parts={props.parts} exercises={props.exercises}/>
      <Part2 part2={props.part2} exercise2={props.exercise2}/>
      <Part3 part3={props.part3} exercise3={props.exercise3}/>
    </div>
  )
}

const Total = (props) => {

    return (
      <div>
        <p>
          The total number of exercises is {props.exercises + props.exercise2 + props.exercise3}
        </p>
      </div>
    )
}

const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10,
  },
  {
    name: 'Using props to pass data',
    exercises: 7,
  },
  {
    name: 'State of component',
    exercises: 14,
  }
]
}
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts[0].name} exercises={course.parts[0].exercises}
      part2={course.parts[1].name} exercise2={course.parts[1].exercises}
      part3={course.parts[2].name} exercise3={course.parts[2].exercises}/>
      <Total exercises={course.parts[0].exercises} exercise2={course.parts[1].exercises} exercise3={course.parts[2].exercises}/>
    </div>
  )
}

export default App
