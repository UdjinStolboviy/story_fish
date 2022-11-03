import type { NextPage } from "next";
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

const StyledInput = styled(Input)`
  margin-bottom: 1rem;
`;

export type LoginForm = {
  identifier: string;
  password: string;
};

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const router = useRouter();

  const { username, email, jwt, error } = useUserStore();

  if (Boolean(jwt) && !error) {
    router.push("/user");
  }

  const onSubmit = (data: LoginForm) => {
    console.log(data, "data-----------------login");
    //useUserStore().login(data);
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
