import S from './Library.module.css'
import {Favorites} from "./Favorites/Favorites";
import bookImg from '../../img/book.png'
import {Search} from './Search/Search'
import {Book} from './Book/Book'


export const Library = (props) => {

    return (
        <div className={S.container}>
            <header className={S.header}>
                <img src={bookImg} alt="label"/>
                <h1 className={S.title}>Library</h1>
            </header>
            <main className={S.body}>
                <Favorites/>
                <div className={S.content}>
                  <Search/>
                  <Book/>
                </div>

            </main>
        </div>
    );
};
