import { createSlice } from "@reduxjs/toolkit";
import {
  FOLLOW_USER,
  GET_USER,
  UNFOLLOW_USER,
  UPDATE_BIO,
  UPLOAD_PICTURE,
} from "../action/user.action"
/* Initialisation de l'état de l'application */
const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GET_USER, (state, action) => {
        return action.payload;
      })
      .addCase(UPLOAD_PICTURE, (state, action) => {
        return {
          ...state,
          picture: action.payload,
        };
      })
      .addCase(UPDATE_BIO, (state, action) => {
        return {
          ...state,
          bio: action.payload,
        };
      })
      .addCase(FOLLOW_USER, (state, action) => {
        return {
          ...state,
          following: [action.payload.idToFollow, ...state.following],
        };
      })
      .addCase(UNFOLLOW_USER, (state, action) => {
        return {
          ...state,
          following: state.following.filter(
            (id) => id !== action.payload.idToUnfollow
          ),
        };
      });
    },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;