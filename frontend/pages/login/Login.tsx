import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

import { RootState, AppDispatch } from "@/store";
import { selectUser, login } from "@/services/userSlice";
import { Page } from "@/components/Page";
import type { NextPage, GetStaticProps, GetServerSideProps } from "next";
import Head from "next/head";
import { Layout } from "@/components/Layout";

import { CenteredTile } from "@/components/Tile";
import { Input, ConditionalFeedback } from "@/components/Input";
import { Button } from "@/components/Button";
import { StyledLink } from "@/components/StyledLink";
import { useUserStore } from "@/providers/RootStoreProvider";
import { observer } from "mobx-react-lite";
import { useCallback, useEffect, useState } from "react";
import { ApiService } from "@/services/api";
import { UserState } from "@/data-stores/TypesApp";

const StyledInput = styled(Input)`
  margin-bottom: 1rem;
`;

export type LoginForm = {
  identifier: string;
  password: string;
};

const Login: NextPage = () => {
  const apiService = new ApiService();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const router = useRouter();

  const { username, email, jwt, error, requestState } = useUserStore();

  const [dataForm, setDataForm] = useState({} as LoginForm);
  const [dataUser, setDataUser] = useState(null);

  if (dataUser) {
    console.log("dataUser", dataUser.user);
    useUserStore().setUser(dataUser.user);
  }

  if (jwt) {
    router.push("/user");
  }
  useEffect(() => {
    if (!jwt) {
      apiService.login(dataForm).then((data) => {
        setDataUser(data);
      });
    }
  }, [dataForm]);

  const onSubmit = (data: LoginForm) => {
    setDataForm(data);
  };

  return (
    <>
      <Head>
        <title>CoursesBox</title>
        <meta name="description" content="IT courses for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CenteredTile header="Login">
            <h3>
              <ConditionalFeedback>{error}</ConditionalFeedback>
            </h3>
            <StyledInput
              label="Identifier"
              placeholder="username or email"
              feedback={
                <ConditionalFeedback>
                  {errors.identifier?.message}
                </ConditionalFeedback>
              }
              height={8}
              {...register("identifier", {
                required: "Required field!",
                minLength: { value: 6, message: "Min length 6!" },
              })}
            />
            <StyledInput
              label="Password"
              type="password"
              placeholder="password"
              role="textbox"
              feedback={
                <ConditionalFeedback>
                  {errors.password?.message}
                </ConditionalFeedback>
              }
              height={8}
              {...register("password", {
                required: "Required field!",
                minLength: { value: 8, message: "Min length 8!" },
              })}
            />
            <Button type="submit">Sign In</Button>
            <h3>
              <Link href="/registration" passHref>
                <StyledLink underline>Create account</StyledLink>
              </Link>
            </h3>
          </CenteredTile>
        </form>
      </Layout>
    </>
  );
};

export default observer(Login);
