import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostType } from "../../shared/types";

const ownPublicationsSlice = createSlice({
   name: "ownPublications",
   initialState: [] as IPostType[],
   reducers: {
      addPublication(state, action: PayloadAction<IPostType>) {
         state.push(action.payload);
      },
      removePublication(state, action: PayloadAction<IPostType>) {
         return state.filter((post) => action.payload.id !== post.id);
      },
      updatePublication(state, action: PayloadAction<IPostType>) {
         const index = state.findIndex((post) => post.id === action.payload.id);
         if (index !== -1) {
            state[index] = action.payload;
         }
      },
   },
});

export const { addPublication, removePublication, updatePublication } =
   ownPublicationsSlice.actions;

export default ownPublicationsSlice.reducer;
