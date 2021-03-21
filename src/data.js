import React , {useState, useEffect} from 'react'
import {connect} from "react-redux"
import { setUser } from './redux/data/data.actions'
const Data = (props) => {
    const [data, setData] = useState("maryam noor")
    // useEffect(()=>{
    //     props.setUser(data)
    // },[])
    console.log("hhh",props.currentUser2)
    return (
        <div>
           <h1>{props.currentUser2}</h1> 
           <button onClick={()=> props.setUser(data)}>clickk me</button>
        </div>
    )
}

const mapStateToProps= ({data}) => ({
      currentUser2 : data.currentUser2
})

const mapDispatchToProps = dispatch => ({
    setUser: data => dispatch(setUser(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Data)