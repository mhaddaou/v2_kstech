import { createSlice } from "@reduxjs/toolkit";


export enum LanguageEnum {
    US = 'us',
    FR = 'fr',
  }

interface LanguageState {
  value  : LanguageEnum;
}
const storedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : null;


const initialState: LanguageState = {
    value: storedLanguage ? (storedLanguage as LanguageEnum) : LanguageEnum.FR, 
  };

  const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
      setLanguage: (state, action) => {
        state.value = action.payload;
        // Store the selected language in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('language', action.payload);
        }
      },
    },
  });
  
  export const { setLanguage } = languageSlice.actions;
  export default languageSlice.reducer;