import React from "react";
import Link from "next/dist/client/link";
import Image from "next/image";
import { LargeCardStyledBlog, SmallCardStyledBlog } from "./styles-blog-cart";

import moment from "moment";
import { imageLoader } from "../ImageLoader";
interface IProps {
  size: "large" | "small";
  srcImg: string;
  title?: string;
  teg?: string;
  srcPhoto: string;
  name?: string;
  date?: string;
  id?: number;
}

const CardBlogPageOther = ({
  srcImg,
  title,
  name,
  date,
  id,
  srcPhoto,
  size = "large",
}: IProps) => {
  let imgWidht;
  let imgHeigth;
  const renderWrapperCard = () => {
    if (size === "large") {
      imgWidht = 650;
      imgHeigth = 560;
      return LargeCardStyledBlog;
    }
    imgWidht = 400;
    imgHeigth = 365;
    return SmallCardStyledBlog;
  };
  const WrapperCard = renderWrapperCard();

  const trimTitle = (title = ""): string => {
    if (title.length > 68) {
      const trimedTitle = title.slice(0, 68);
      console.log(trimedTitle);
      return trimedTitle + "...";
    }
    return title;
  };

  const dateId = () => {
    // window.location.reload();
    return `post?id=${id}`;
  };

  return (
    <WrapperCard>
      <div className="card-wrapper">
        <Link href={dateId()}>
          <a>
            <h3>{trimTitle(title)}</h3>
            <div>
              <div>
                <Image
                  width={64}
                  height={64}
                  src={srcPhoto}
                  loader={imageLoader}
                />
              </div>
              <p>
                <span>{name}</span>
                <span>{moment(date).format("MMMM DD,YYYY")}</span>
              </p>
            </div>
          </a>
        </Link>
      </div>
      <Link href={dateId()}>
        <a>
          <div className="card-img">
            <Image
              width={imgWidht}
              height={imgHeigth}
              src={srcImg}
              loader={imageLoader}
            />
          </div>
        </a>
      </Link>
    </WrapperCard>
  );
};

export default CardBlogPageOther;
