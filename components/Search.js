import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Search.module.css'

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";


const Search = () => {

    const router = useRouter()
    const submitContact = async (event) => {
        event.preventDefault();
        const search_value = event.target.search_value.value;
        router.push(`/artist/${search_value}`)
      };

  return (
      <div className={styles.wrap}>
        <form onSubmit={submitContact}>
            <div className={styles.search}>
             <input type="text" className={styles.searchTerm} name="search_value" placeholder="Search artist" required />
                <button type="submit" className={styles.searchButton}>
                    <FontAwesomeIcon
                        icon={faSearch}
                    />
                </button>
            </div>
            </form>
        </div>
  )
}


export default Search