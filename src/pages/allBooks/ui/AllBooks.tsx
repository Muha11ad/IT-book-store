import { BooksContent } from '../../../entities/booksContent'
import { Footer } from '../../../widgets/footer'
import { Header } from '../../../widgets/header'
import './AllBooks.scss'

export const AllBooks = () => {
  return (
    <>
    <Header/>
    <div className='container'>
    <BooksContent/>
    </div>
    <Footer/>
    </>
  )
}
