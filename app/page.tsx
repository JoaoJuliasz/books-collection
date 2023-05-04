import getListsTopBooks from '@/lib/getListsTopBooks'
import ListsTopBooks from './components/ListsTopBooks/ListsTopBooks'
import styles from './page.module.css'

export default async function Home() {

  const topBooksData: Promise<ListTopBooks> = getListsTopBooks()
  const topBooks = await topBooksData

  return (
    <main className={styles.main}>
      <ListsTopBooks topBooks={topBooks} />
    </main>
  )
}
