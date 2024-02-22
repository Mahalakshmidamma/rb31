import React from "react"
function Counter(){
         var[c,setC]=React.useState(0)
              
         function inc(){
            setC(c+1)
        }

        function dec(){
            setC(c-1)
        }
         
        function increment(){
        //    setC(c+1) //-----(0+1) set count  is an asynchronous fun
        //    setC(c+1)  //---(0+1)--1st method -- notworks
        //    setC(c+1)
        //    setC(c+1)
         
          for(var i=1;i<=10;i++){
            setC((a)=>{  //----cal back fun
              return(a+1)  //-----2nd month -- works
            })
          }

        }


            // function inc(){
            //     setC((a)=>{  //-------------------[2]FOR POPUP
            //         console.log(a)
            //         document.getElementById("dd").style.display="block"
            //         setTimeout(()=>{
            //             document.getElementById("dd").style.display="none"
            //         },2000)
            //         return a+1
            //     })
            
            
        // function dec(){
            // setC((a)=>{  //-----------------------[2]
            //    console.log(a)
            //    document.getElementById("de").style.display="block"
            //    setTimeout(()=>{
            //     document.getElementById("de").style.display="none"
            //    },2000)
            //    return a-1
            // })


        // React.useEffect(()=>{    //----------------[1]TO CHECK RENDERING TIME
        //     console.log("hello")
        // },[])

        // React.useEffect(()=>{
        //     console.log("happy")
        // })
      
        // console.log("counter")

      return(
           <div className="mybox">
                 <h1>Counter:{c}</h1>
                 <button onClick={()=>(inc())}>Increment</button>
                 <button onClick={()=>(dec())}>Decrement</button>
                 <button onClick={()=>(increment())}>Inc 10 times</button>
           {/* <div id="dd">  //--------------[2]
                <h1>INCREMENTED</h1>
           </div>
           <div id="de">
                <h1>DECREMENTED</h1>
           </div> */}
        </div>
      )
    }

    export default React.memo(Counter)