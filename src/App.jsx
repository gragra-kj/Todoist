import Todo from "./Components/Todo"

const App = () => {
  // const[x,setx]=useState(0);
  // // let x="Gracie"
  // // let array=["Grace","Phoebe","Joy","Millena"]
  // //let data="Grace"
  // const btnClick=()=>{
  //   console.log("Clicked");
  //   setx(x+1);
  //   console.log(x);
  // }
  // const[data,setData]=useState([])
  // const inputRef=useRef(null);

  return (
    <div>
      {/* {x}
      {array.map((user)=>{return <h2>{user}</h2>})} */}
      {/*data==="Grace"?<h1>Grace</h1>:<h1>Joy</h1>*/}
      {/* <button onClick={()=>{btnClick()}}>Click me</button>
      <FirstComponent data={x} fn={setx}/> */}
      {/* <input type="text" ref={inputRef} />
      <button onClick={()=>{setData([...data,inputRef.current.value])}}>Submit</button>
      {data.map((item,index)=>{return<h1 key={index}>{item}</h1>})} */}
      <Todo/>

      </div>
  )
}
export  default App
