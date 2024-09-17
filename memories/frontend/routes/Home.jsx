//HOOKS
import { useState, useEffect } from "react"

//ROUTES 
import { Link } from "react-router-dom"

//AXIOS
import axios from "../axios/axios-config"

//CSS 
import styles from './Home.module.css'

const Home = () => {
  const [memories, setMemories] = useState([])

  useEffect(() => {
    const getMemories = async() => {
      const res = await axios.get("/memories")

      setMemories(res.data)
    }

    getMemories();
  }, [])


  return (
    <div className={styles.home}>
      <h2>Confira suas ultimas memórias</h2>
      <div className={styles.memories_container}>
        {memories.length > 0 && memories.map((memory) => 
          <div className={styles.memory} key={memory._id}>
            <img src={`http://localhost:3000/${memory.src}`} alt={memory.title} />
            <p>{memory.title}</p>
            <Link className="btn" to={`/memories/${memory._id}`}>Comentar</Link>
        </div>)}
      </div>
    </div>
  )
}

export default Home

