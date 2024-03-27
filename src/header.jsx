function Header(props){
    console.log(props)
    const {name,text,status}=props
    function okay(){
        alert("yah!Happily Living....")
    }
    function notokay(){
        alert("nope!Dont Ask me About it")
    }
    return (
        <div>
            <h1>Hello,{name}! {text} {status}</h1>
           <span> <button onClick={okay }>Okay</button></span> 
           <span> <button onClick={notokay}>Not Okay</button></span>
        </div>
    )
}
export default Header