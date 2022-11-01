import { config } from '../../config';
import { IPosts, IGetPost, IGetVacancies, IGetFeedbacks, IQuery, IGetInstagramPosts } from './types';
import qs from 'qs';

type FetchMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

interface IFetchHeaders {
    [key: string]: string;
}

const fetchWithTimeout = (url: RequestInfo, options: RequestInit, timeout: number): Promise<any> => {
    console.log('fetchWithTimeout', url);
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout error')), timeout)),
    ]);
};

export class ApiService {
    public getVacancies(): Promise<IGetVacancies> {
        return this.makeRequest<IGetVacancies>(`${config().URL}/api/jobs`, 'GET');
    }

    public getFeedbacks(q?: IQuery): Promise<IGetFeedbacks> {
        const defaultQuery: IQuery = {
            pagination: {
                page: 2,
                pageSize: 3,
            },
            sort: ['publishedAt:desc'],
        };
        const query = q ? qs.stringify(q) : qs.stringify(defaultQuery);
        return this.makeRequest<IGetFeedbacks>(`${config().URL}/api/fecks?${query}`, 'GET');
    }

    public getInstagramPosts(q?: IQuery): Promise<IGetInstagramPosts> {
        return this.makeRequest<IGetInstagramPosts>(`${config().baseURL}/inssts`, 'GET');
    }

    public getPost(id: string): Promise<IGetPost> {
        return this.makeRequest<IGetPost>(`${config().baseURL}/posts/${id}?populate=adminior.img,mainImg`, 'GET');
    }

    public getPosts(limit: number): Promise<IPosts> {
        return this.makeRequest<IPosts>(
            `${config().baseURL}/posts?populate=administrator,administrator.img,mainImpagination[limit]=${limit}`,
            'GET',
        );
    }

    private async makeRequest<TResponse>(
        url: string,
        method?: FetchMethod,
        requestBody?: object | FormData,
        headerOptions?: object,
    ): Promise<TResponse> {
        const body = !(requestBody instanceof FormData) ? JSON.stringify(requestBody) : requestBody;
        const requestHeaders = headerOptions || {};

        const headers: IFetchHeaders = {
            accept: 'application/json',
            ...requestHeaders,
        };

        if (!(requestBody instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
        }

        const response = await fetchWithTimeout(
            url,
            {
                method,
                headers,
                body,
            },
            15000,
        );

        if (response.ok) {
            const resJson = await response.json();
            return resJson;
        } else {
            throw await response.json();
        }
    }
}
