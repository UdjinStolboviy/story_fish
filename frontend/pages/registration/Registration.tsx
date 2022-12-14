import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";

import { RootState, AppDispatch } from "@/store";
import {
  selectUser,
  registration,
  RegistrationData,
} from "@/services/userSlice";

import { CenteredTile } from "@/components/Tile";
import { Input, ConditionalFeedback } from "@/components/Input";
import { Button } from "@/components/Button";
import { StyledLink } from "@/components/StyledLink";
import Head from "next/head";
import { Layout } from "@/components/Layout";

import { useEffect, useState } from "react";
import { getUserInfoFromLocalStorage } from "@/utils/utils";
import { ApiService } from "@/services/api";

const StyledInput = styled(Input)`
  margin-bottom: 1rem;
`;

const Registration: NextPage = () => {
  const [dataForm, setDataForm] = useState<RegistrationData | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>();
  const router = useRouter();
  const user = getUserInfoFromLocalStorage();
  const apiService = new ApiService();

  useEffect(() => {
    if (dataForm && !user) {
      apiService.registration(dataForm).then((data) => {
        router.push("/login");
      });
    }
  }, [dataForm]);
  const onSubmit = (data: RegistrationData) => {
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
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CenteredTile header="Create an account">
              <h3>
                <ConditionalFeedback>
                  {errors.username?.message}
                </ConditionalFeedback>
              </h3>
              <StyledInput
                label="username"
                placeholder="username"
                feedback={
                  <ConditionalFeedback>
                    {errors.username?.message}
                  </ConditionalFeedback>
                }
                {...register("username", {
                  required: "Required field!",
                  minLength: { value: 6, message: "Min length 6!" },
                  pattern: {
                    value: /^[\w\d\s]+$/,
                    message: "Only letters, numbers and spaces!",
                  },
                })}
              />
              <StyledInput
                label="email"
                feedback={
                  <ConditionalFeedback>
                    {errors.email?.message}
                  </ConditionalFeedback>
                }
                placeholder="email"
                type="email"
                {...register("email", {
                  required: "Required field!",
                  pattern: {
                    value: /^\S+@\S+$/,
                    message: "Invalid email!",
                  },
                })}
              />
              <StyledInput
                label="password"
                type="password"
                role="textbox"
                feedback={
                  <ConditionalFeedback>
                    {errors.password?.message}
                  </ConditionalFeedback>
                }
                placeholder="password"
                {...register("password", {
                  required: "Required field!",
                  minLength: { value: 8, message: "Min length 8!" },
                })}
              />
              <Button type="submit">Sign Up</Button>
              <h3>
                <Link href="/login" passHref>
                  <StyledLink underline>Login</StyledLink>
                </Link>
              </h3>
            </CenteredTile>
          </form>
        </>
      </Layout>
    </>
  );
};

export default Registration;
