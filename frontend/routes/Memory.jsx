//REACT
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

//HOOKS
import { useState, useEffect } from 'react'

//AXIOS
import axios from '../axios/axios-config'

//CSS
import styles from './Memory.module.css'

const Memory = () => {
    const { id } = useParams()

    const [memory, setMemory] = useState(null)
    const [comments, setComments] = useState([])

    const [name,setName] = useState("")
    const [text,setText] = useState("")

    useEffect(() => {
        const getMemory = async () => {
            const res = await axios.get(`/memories/${id}`)

            setMemory(res.data);

            setComments(res.data.comments)
        }

        getMemory()
    },[])

    const handleSubmit = async(e) =>{
        e.preventDefault()

        try {
            const comment = { name, text }

            const res = await axios.patch(`/memories/${memory._id}/comment/`, comment)

            const lastComment = res.data.memory.comments.pop()

            setComments((comments) => [...comments, lastComment])

            setName("")
            setText("")

            toast.success(res.data.msg)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.msg)
        }
    }

    if(!memory) return <p>Carregando...</p>

  return (
    <div className={styles.memory_page}>
        <img src={`http://localhost:3000/${memory.src}`} alt={memory.title} />
        <h2>{memory.title}</h2>
        <p>{memory.description}</p>
        <div className={styles.comment_form}>
            <h3>Envie o seu comentário:</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type='text' placeholder='Seu nome' onChange={(e) => setName(e.target.value)} value={name}/>
                </label>
                <label>
                    <textarea placeholder='Escreva seu comentário' onChange={(e) => setText(e.target.value)} value={text}></textarea>
                </label>
                <input type="submit" value="Enviar" className='btn'/>
            </form>
        </div>
        <div className={styles.comments_container}>
            <h3>Comentários ({comments.length})</h3>
            {comments.length === 0 && <p>Não há comentários...</p>}
            {comments.length > 0 && 
                comments.map((comment) => (
                    <div className={styles.comment} key={comment._id}>
                        <p className={styles.comment_name}>{comment.name}</p>
                        <p className={styles.comment_text}>{comment.text}</p>
                    </div>
                )
            )}
        </div>
    </div>
  )
}

export default Memory