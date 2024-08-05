
import { useReducer, useState } from 'react';
import './App.css';
import Content from "./Content";
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { useStore, actions } from './store';
import Heading from './components/heading';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import NewsPage from './pages/New';
import ContactPage from './pages/Contact';

const gifts = [
  'CPU I9',
  'RAM 32GB',
  'RBG KEYBROAD',
]
////useReducer
//1, Init State
const initState = {
  job: '',
  jobs: []
}
//2, actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => ({ type: SET_JOB, payload })
//3, reducer
const reducer = (state, action) => {

}
function App() {
  // const [gift, setGift] = useState()
  // const randomGift = () => {
  //   const index = Math.floor(Math.random() *gifts.length)
  //   setGift(gifts[index]);
  // }
  // return (
  // <div style={{ padding: 32}}> 
  //   <h1> {gift || 'chưa có thưởng'} </h1>
  //   <button onClick={randomGift}>
  //       alo
  //     </button> 
  //  </div>
  // );



  //////////////////////////////
  // const courses = [{
  //   id: 1, name: "Nguyen A", age: 20
  // }, {
  //   id: 2, name: "Nguyen B", age: 21
  // }, {
  //   id: 3, name: "Nguyen C", age: 22
  // }]
  // const [check, setCheck] = useState([])

  // const handleSubmit = () => {
  //   console.log({id: check})
  // }
  // const handlecheck =(id)=>{
  //   setCheck(prev => {
  //     const isChecked = check.includes(id)
  //     if(isChecked){
  //       return check.filter(item => item !== id)
  //     }else{
  //       return [...prev,id]
  //     }
  //   })
  // }
  // return (
  //   <div style={{ padding: 32 }}>
  //     {courses.map(course => (
  //       <div key={course.id}>
  //         <input
  //           type='checkbox'
  //           checked={check.includes(course.id)}
  //           onChange={()=> handlecheck(course.id)}
  //         />
  //         {course.name},{
  //           course.age
  //         }
  //       </div>
  //     ))}
  //     <button onClick={handleSubmit}>click</button>
  //   </div>
  // );

  // const [job, setJob] = useState('')
  // const [jobs, setJobs] = useState(()=>{
  //   const storageJobs = JSON.parse(localStorage.getItem('jobs'))
  //   console.log(storageJobs)
  //   return storageJobs;
  // })

  // const handleSubmit =()=>{
  //   setJobs(prev => {
  //     const newJobs = [...prev,job];
  //     const jsonJobs = JSON.stringify(newJobs)
  //     localStorage.setItem('jobs', jsonJobs)
  //     return newJobs
  //   })
  //   setJob('')
  // }
  // const [show, setShow] = useState(false)
  // const setShow1 =()=>{
  //   setShow(!show)
  // }
  // return(
  //   <div style={{padding:32}}>
  //        {/* <input value={job} onChange={e => setJob(e.target.value)}/>
  //       <button onClick={handleSubmit}>Add</button>
  //       <ul>
  //         {jobs.map((job, index)=>( 
  //           <li key={index}>{job}</li>
  //         ))}
  //       </ul>  */}
  //       <button onClick={setShow1}>Toggle</button>
  //       {show && <Content/>}


  //   </div>
  // );


  // const [state, dispatch] = useReducer(reducer, initState)
  // const {job, jobs} = state
  // return (
  //   <div>
  //     <h3>Todo</h3>
  //     <input value={job} placeholder='Enter todo' onChange={
  //       e => dispatch({type: SET_JOB, payload: e.target.value})
  //     }></input>
  //     <button>Add</button>
  //     <ul>
  //       {jobs.map((job,index)=>{
  //         <li key={index}>Todo 1 &times;</li>
  //       })}

  //     </ul>
  //   </div>
  // );
  const [state, dispatch] = useStore()
  console.log(state)
  const { todos, todoInput } = state

  console.log(todos)
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
  }


  // return(

  //   // <div style={{padding:10}}>
  //   //   <button onClick={'click'}>Click</button>
  //   //   <Content/>
  //   // </div>
  //   <div>
  //     <input
  //       value={state.todoInput}
  //       placeholder='enter ...'
  //       onChange={e => {
  //         dispatch(actions.setTodoInput(e.target.value))
  //       }}/>
  //       <button onClick={handleAdd}>Add</button>
  //       {todos.map((todo, index) => (
  //         <div key={index}>{todo}</div> 
  //       ))}
  //   </div>
  //   )
  return (
    <div className='app'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/new'>Mew</Link>
          </li>
          <li>
            <Link to='/contact'>Comtact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new' element={<NewsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>

  );

}

export default App;
