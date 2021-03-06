import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Search.module.css'

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// To import the icons needed
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
        <form data-testid="search" onSubmit={submitContact}>
            <div className={styles.search}>
             <input type="text" className={styles.searchTerm} name="search_value" data-testid="searchField" placeholder="Search Artist" required />
                <button data-testid="searchButton" type="submit" className={styles.searchButton}>
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