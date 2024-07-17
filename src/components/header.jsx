import { Link } from "react-router-dom";
import { useRef } from "react";
import { CgMenu } from "react-icons/cg"
import { IoCloseOutline  } from "react-icons/io5"
import styles from "../styles/header.module.css"
function Header() {
    const header = useRef(null);
    const open = useRef(null)
    const close = useRef(null)
    return (
        <div className={styles.headers}>
            <header ref={header} className={styles.header}>
              <div className={styles.nav}>
                <Link to="/">Note</Link>
                <Link to="add">Add</Link>
                <Link to="trash">Trash</Link>
                <Link to="favorite">Favorite</Link>  
              </div>
   
            </header>
            <div>
                <button
                ref={open}
                className={styles.open}
                    onClick={() => {
                       open.current.style.display = "none"
                           close.current.style.display = "block"
                        header.current.style.display = "block"
                    }}
                >
                <CgMenu/>
                </button>
                <button
                ref={close}
                    className={styles.close}
                    onClick={() => {
                       close.current.style.display = "none"
                       open.current.style.display = "block"
                        header.current.style.display = "none"
                    }}
                >
                    <IoCloseOutline />
                </button>
            </div>
        </div>
    );
}
export default Header;
