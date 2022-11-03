import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { mockUser } from "@/mocks/user";

import { rootReducer } from "@/store";
import User from "@/pages/sections/user";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    user: {
      jwt: mockUser.jwt,
      username: mockUser.user.username,
      email: mockUser.user.email,
    },
  },
});

export default {
  title: "Pages/User",
  component: User,
};

export const UserPage = () => (
  <Provider store={store}>
    <User />
  </Provider>
);
