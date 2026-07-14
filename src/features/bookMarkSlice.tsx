import { createSlice,PayloadAction } from "@reduxjs/toolkit";
interface BookmarkState {
  savedItems: any[];
}
// it is like a contract, typescript is a strict language 
// we are telling that in savedItems we put an array of 
// any data type 

const initialState: BookmarkState = {
  savedItems: [],
};






const bookMarkSlice=createSlice(
    {
        name:"bookmark",
        initialState,
        reducers:{
              addToBookmark:(state,action:PayloadAction<any>)=>{
                const existingItem=state.savedItems.some(
                    (item:any)=>item.id==action.payload.id
                );
                if(!existingItem){
                    state.savedItems.push(action.payload);
                }
              },
              removeFromBookmark:(state,action:PayloadAction<any>)=>{
                state.savedItems=state.savedItems?.filter(
                    (item)=>item.id!=action.payload.id
                );
              }
        }
    }
)
export const{addToBookmark,removeFromBookmark}=bookMarkSlice.actions;
export default bookMarkSlice.reducer;