import { ImageLoader, ImageLoaderProps } from "next/image";

export const imageLoader: ImageLoader = (resolverProps: ImageLoaderProps) => {
    return resolverProps.src;
};
