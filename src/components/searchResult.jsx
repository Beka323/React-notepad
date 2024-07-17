import { useNavigate} from "react-router-dom"
import styles from "../styles/search.module.css"
function SearchResult({data}){
  const navigate = useNavigate()
  return(
    <>
      {data.length !== 0 ? (
      <div className={styles.noteBox}>
        {data.map(note => (
        <div className={styles.note}>
           <h4>{note.title}</h4>
           <p>{note.note.substring(0,45)}</p>
           <button onClick={() => navigate(`view/${note.id}`)}>view</button>
         </div>
        ))}
      </div>
      ): (
      <p className="empty">No result Found</p>
      ) }
    </>
    )
}
export default SearchResult