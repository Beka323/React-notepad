import { useSelector, useDispatch } from "react-redux";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { addToTrash, addToFavorite } from "../store/noteSlice.jsx";
import Search from "./search.jsx";
import SearchResult from "./searchResult.jsx"
import styles from "../styles/home.module.css"
function Home() {
    const note = useSelector(state => state.note.note);
    const dispatch = useDispatch();
    const [searchState, setSearchState] = useState(false);
    const [data,setData] = useState([])
    const navigate = useNavigate()
    return (
        <>
            <Search searchState={searchState} setSearchState={setSearchState} setData={setData} />
            {searchState ? (
            <SearchResult data={data}/>
            ) : (
            <div>
           {note.length !== 0 ? (
                <section className={styles.noteBox}>
                    {note.map(note => (
                        <div className={styles.note} key={note.id}>
                            <h4>{note.title}</h4>
                            <p>{note.note.substring(0,45)}</p>
                      <button className={styles.view} onClick={() => {
                        navigate(`/view/${note.id}`)
                      }}>
                              view
                      </button>
                            <button
                            className={styles.trash}
                                onClick={() => {
                                    dispatch(
                                        addToTrash({
                                            id: note.id
                                        })
                                    );
                                }}
                            >
                                Trash
                            </button>
                            <button
                            className={styles.favorite}
                                onClick={() => {
                                    dispatch(
                                        addToFavorite({
                                            id: note.id
                                        })
                                    );
                                }}
                            >
                                Favorite
                            </button>
                        </div>
                    ))}
                </section>
            ) : (
                <p className="empty">No Notes found</p>
            )} 
            </div>
            )}
        </>
    );
}
export default Home;
