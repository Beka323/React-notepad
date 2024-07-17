import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    note: [
        {
            id: nanoid(),
            title: "welcome to react notepad",
            note: "hit that view button, to learn more about the app this is react notepad which help you to take note effectively you can search note add new note edit the exsist note save note as a favorite and you can move your note to trash,from the trash you ,an delete or restore your note anytime you want,i hope you find this app help full thank you for watching "
        }
    ],
    trash: [],
    favorite: []
};

export const noteSlice = createSlice({
    name: "Note",
    initialState,
    reducers: {
      addNote: (state, action) => {
        state.note.push(action.payload);
      },
     addToTrash:(state,action) => {
       const findNote = state.note.find(note => note.id === action.payload.id)
       
       const filterData = state.note.filter(note => note.id !== action.payload.id)
       const filterFav = state.favorite.filter(favTrash => favTrash.id !== action.payload.id)
       state.trash.push(findNote)
       state.note = filterData
       state.favorite = filterFav
     },
     addToFavorite:(state,action) => {
       const findNote = state.note.find(note => note.id === action.payload.id)
       state.favorite.push(findNote)
     },
     restoreTrash:(state,action)=>{
       const findTrash = state.trash.find(trash => trash.id === action.payload.id)
       const filterTrash = state.trash.filter(trash => trash.id !== action.payload.id)
       state.note.push(findTrash)
       state.trash = filterTrash
     },
     deleteTrash:(state,action) => {
      const filterTrash = state.trash.filter(trash => trash.id !== action.payload.id)
      state.trash = filterTrash
     },
     editNote:(state,action) => {
       state.note.map(note => {
         if(note.id === action.payload.id) {
             note.id = action.payload.id
             note.title = action.payload.title
             note.note = action.payload.note
       } else{
             return note
        }
       })
    },
    removeFavorite:(state,action) => {
      const filterFav = state.favorite.filter(fav => fav.id !== action.payload.id)
      state.favorite = filterFav
    }
    }
});
export const { addNote,addToTrash,addToFavorite,restoreTrash,deleteTrash,editNote,removeFavorite} = noteSlice.actions;
