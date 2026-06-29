
import axios from "axios"
const FilterProduct = () => {
    const [data,setData]=useState([])
   let res=axios.get("http://localhost:3000/products")
   setData(res)
  return (
    <div>
     <h1>Filter</h1>   
  

    </div>
  )
}

export default FilterProduct