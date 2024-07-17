import { useParams,Link,useNavigate} from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect,useState} from "react"
import styles from "../styles/view.module.css"
function View(){
  const { id }= useParams()
  const [view,setView] = useState([])
  const note = useSelector(state => state.note.note)
  const navigate = useNavigate()
  
  function getViewNote(){
    const viewedNote = note.filter(view => view.id === id)
      setView(viewedNote)
     }
   useEffect(() => {
     getViewNote()
   },[id])

  return(
    <>
      <h3>view</h3>
      {view.length !== 0 ? (
      <div className={styles.noteBox}>
        {view.map(view => (
      <div className={styles.note} key={view.id}>
          <h4>{view.title}</h4>
          <p>{view.note}</p>
          <button onClick={() => {
            navigate(`/${view.id}`)
          }}>Edit</button>
      </div>
        ))}
      </div>
      ) : (
      <p>Hello</p>
      ) }
    </>
    )
}
export default View