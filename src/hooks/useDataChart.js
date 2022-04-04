import axios from "axios"
import { useEffect, useState } from "react"

const useDataChart = () => {
    const [data , setData] = useState([])

    useEffect(() => {
        axios.get('data.json')
        .then(data => setData(data.data))
    },[])
    return [data]
}

export default useDataChart;