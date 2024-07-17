import { useState,useEffect,} from "react";
import { useSelector } from "react-redux"
import styles from "../styles/search.module.css"
function Search({searchState,setSearchState,setData}) {
    const [search, setSearch] = useState("");
    const note = useSelector(state => state.note.note)
     function handleSearch(e){
      setSearch(e.target.value.toLowerCase())
       setSearchState(true)
      if(e.target.value.trim() === "" ){
        setSearchState(false)
      }
    }
useEffect(() => {
function filterData(){
  const filterData = note.filter(note => 
    note.title.includes(search) || note.note.includes(search))
  setData(filterData)
}
filterData()
},[search,note])

    return (
        <>
            <form className={styles.form}>
                <input
                    type="text"
                    value={search}
                   onChange={e => handleSearch(e) }
                    placeholder="search"
                />
            </form>
        </>
    );
}
export default Search;
