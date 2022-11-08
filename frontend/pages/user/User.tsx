import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, AppDispatch } from "@/store";
import { selectUser, logout, UserState, UserData } from "@/services/userSlice";

import { CenteredTile } from "@/components/Tile";
import { Button } from "@/components/Button";

import Head from "next/head";
import { Layout } from "@/components/Layout";

import {
  clearUserInfoFromLocalStorage,
  getUserInfoFromLocalStorage,
} from "@/utils/utils";
import { useQueryClient } from "react-query";

const User: NextPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const userLocal = getUserInfoFromLocalStorage();
  //const user: UserData = queryClient.getQueryData("user");

  //const userdfdf: UserState = queryClient.getQueryData("user");
  // console.log(userdfdf, "user");

  useEffect(() => {
    console.log(userLocal, "user");
    if (!userLocal || userLocal === undefined) {
      router.push("/login");
    }
  }, []);

  const logoutHandler = () => {
    clearUserInfoFromLocalStorage();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>CoursesBox</title>
        <meta name="description" content="IT courses for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {userLocal && userLocal.user.username && userLocal.user.email ? (
          <CenteredTile header="Profile">
            <h3>username: {userLocal.user.username}</h3>
            <h3>email: {userLocal.user.email}</h3>
            <Button onClick={logoutHandler}>Logout</Button>
          </CenteredTile>
        ) : null}
      </Layout>
    </>
  );
};

export default User;
