import { useSelector,useDispatch } from "react-redux"
import { removeFavorite } from "../store/noteSlice.jsx"
import styles from "../styles/favorite.module.css"

function Favorite() {
    const favorite = useSelector(state => state.note.favorite);
    const dispatch = useDispatch()
    return (
        <>
          <h3>Favorite</h3>
            {favorite.length !== 0 ? (
                <div className={styles.noteBox}>
                    {favorite.map(fav => (
                        <div className={styles.note} key={fav.id}>
                            <h4>{fav.title}</h4>
                            <p>{fav.note.substring(0,45)}</p>
                            <button onClick={() => dispatch(removeFavorite({
                            id:fav.id
                            }))}>Un favorite</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="empty">No favorite Notes</p>
            )}
        </>
    );
}
export default Favorite;
