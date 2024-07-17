import { useSelector,useDispatch } from "react-redux";
import { restoreTrash,deleteTrash } from  "../store/noteSlice.jsx"
import styles from "../styles/trash.module.css"
function Trash() {
    const trash = useSelector(state => state.note.trash);
    const dispatch = useDispatch()
    return (
        <>
          <h3>Trash</h3>
            {trash.length !== 0 ? (
                <div className={styles.noteBox}>
                    {trash.map(trash => (
                        <div className={styles.note} key={trash.id}>
                            <h4>{trash.title}</h4>
                            <p>{trash.note.substring(0,45)}</p>
                        <button className={styles.restore} onClick={() => dispatch(restoreTrash({
                          id:trash.id
                        }))}>Restore</button>
                        <button className={styles.delete} onClick={() => dispatch(deleteTrash({
                          id:trash.id
                        }))}>Delete</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="empty">Your trash is Empty</p>
            )}
        </>
    );
}
export default Trash;
