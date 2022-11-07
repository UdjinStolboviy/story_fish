import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, AppDispatch } from "@/store";
import { selectUser, logout, UserState } from "@/services/userSlice";

import { CenteredTile } from "@/components/Tile";
import { Button } from "@/components/Button";

import Head from "next/head";
import { Layout } from "@/components/Layout";

import { useState } from "react";
import { clearUserInfoFromLocalStorage } from "@/utils/utils";
import { useQueryClient } from "react-query";

const User: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<UserState | null>(null);
  const queryClient = useQueryClient();
  console.log("user ----------------  s ", user);
  useEffect(() => {
    const user: UserState | undefined = queryClient.getQueryData("user");

    if (!user) {
      router.push("/login");
    } else {
      setUser(user);
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
        {user && user.username && user.email ? (
          <CenteredTile header="Profile">
            <h3>username: {user.username}</h3>
            <h3>email: {user.email}</h3>
            <Button onClick={logoutHandler}>Logout</Button>
          </CenteredTile>
        ) : null}
      </Layout>
    </>
  );
};

export default User;
