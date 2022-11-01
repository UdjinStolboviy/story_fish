import React from 'react';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import { LargeCardStyled, SmallCardStyled } from './styles';
import { imageLoader } from '..';
import moment from 'moment';
interface IProps {
    size: 'large' | 'small';
    srcImg: string;
    title?: string;
    teg?: string;
    srcPhoto: string;
    name?: string;
    date?: string;
    id?: number;
}

const Card = ({ srcImg, title, name, date, id, srcPhoto, size = 'large' }: IProps) => {
    let imgWidht;
    let imgHeigth;
    const renderWrapperCard = () => {
        if (size === 'large') {
            imgWidht = 650;
            imgHeigth = 560;
            return LargeCardStyled;
        }
        imgWidht = 400;
        imgHeigth = 400;
        return SmallCardStyled;
    };
    const WrapperCard = renderWrapperCard();

    const trimTitle = (title = ''): string => {
        if (title.length > 68) {
            const trimedTitle = title.slice(0, 68);
            console.log(trimedTitle);
            return trimedTitle + '...';
        }
        return title;
    };

    return (
        <WrapperCard>
            <div className="card-container">
                <div className="card-wrapper">
                    <Link href={`post?id=${id}`}>
                        <a>
                            <h3>{trimTitle(title)}</h3>
                            <div>
                                <div>
                                    <Image width={64} height={64} src={srcPhoto} loader={imageLoader} />
                                </div>
                                <p>
                                    <span>{name}</span>
                                    <span>{moment(date).format('MMMM DD,YYYY')}</span>
                                </p>
                            </div>
                        </a>
                    </Link>
                </div>
                <Link href={`post?id=${id}`}>
                    <a>
                        <div className="card-img">
                            {' '}
                            <Image width={imgWidht} height={imgHeigth} src={srcImg} loader={imageLoader} />
                        </div>
                    </a>
                </Link>
            </div>
        </WrapperCard>
    );
};

export default Card;
