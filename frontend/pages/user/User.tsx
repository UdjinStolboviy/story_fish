import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, AppDispatch } from "@/store";
import { selectUser, logout } from "@/services/userSlice";

import { CenteredTile } from "@/components/Tile";
import { Button } from "@/components/Button";

import Head from "next/head";
import { Layout } from "@/components/Layout";
import { observer } from "mobx-react-lite";
import { useUserStore } from "@/providers/RootStoreProvider";
import { useState } from "react";

const User: NextPage = () => {
  const router = useRouter();
  const { username, email, error } = useUserStore();
  useEffect(() => {
    if (!username || Boolean(error)) {
      router.push("/login");
    }
  }, []);

  const logoutHandler = () => {
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
        {username && email ? (
          <CenteredTile header="Profile">
            <h3>username: {username}</h3>
            <h3>email: {email}</h3>
            <Button onClick={logoutHandler}>Logout</Button>
          </CenteredTile>
        ) : null}
      </Layout>
    </>
  );
};

export default User;
