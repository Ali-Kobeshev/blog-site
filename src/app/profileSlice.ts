import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";
import { IProfile } from "../shared/types";

const defaultAvatar = require("../shared/assets/defaultAvatar.png");

const initialProfile: IProfile = {
   id: faker.string.uuid(),
   name: faker.person.firstName(),
   avatar: defaultAvatar,
};

const profileSlice = createSlice({
   name: "profile",
   initialState: {
      profile: initialProfile,
   },
   reducers: {},
});

export default profileSlice.reducer;
