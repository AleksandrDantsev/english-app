import { createSlice } from "@reduxjs/toolkit/react";

interface IWordInfo {
    word: string;
    phonetic: string;
    phonetics: [];
    date: string;
    meanings: TDefinition[];
}
type TDefinition = {
    definitions: Array<{definition: string}>
};

type TInitialState = {
    dictionaryList: IWordInfo[]
};


const initialState: TInitialState = {
    dictionaryList: JSON.parse(localStorage.getItem("dictionary") || "[]"),
}


const dictionary = createSlice({
    name: 'dictionary',
    initialState,
    reducers: {
        addWordToDictionary(state, action) {
            if (!state.dictionaryList.find(el => el.word == action.payload.word)) {
                state.dictionaryList.push(action.payload);
                localStorage.setItem("dictionary", JSON.stringify(state.dictionaryList));
            }
        },
    }
});


export const { addWordToDictionary } = dictionary.actions;
export default dictionary.reducer;