import React from "react";
import st from "./FlashCardsEmpty.module.scss";
import { Link } from "react-router-dom";


const FlashCardsEmpty:React.FC = () => {
    return(
        <div className={st.emptyFlashWindow}>
            <div className={st.wrapper}>
                <h1>Flashcards list is empty. Try to create new flashcards in <Link to={"/createflashcards"}>"Create flashcards"</Link></h1>
            </div>
        </div>
    );
}


export default FlashCardsEmpty;