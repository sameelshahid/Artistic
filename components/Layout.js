import styles from '../styles/Home.module.css'
import Header from './Header'
import Search from './Search'

const Layout = ({children}) => {
    return(
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                <Search />
                {children}
            </main>
        </div>
    )
}

export default Layout