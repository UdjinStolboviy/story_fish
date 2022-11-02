export function formatDate(t: Date) {
    return `${padNum(t.getUTCHours())}:${padNum(t.getUTCMinutes())}:${padNum(
        t.getUTCSeconds()
    )}:${padMiliseconds(t.getUTCMilliseconds())}`;
}

export function padNum(n: number) {
    return n < 10 ? `0${n}` : n;
}

export function padMiliseconds(n: number) {
    return n < 10 ? `00${n}` : n < 100 ? `0${n}` : n;
}

export async function fetchPost(id: any) {
    return new Promise(resolve =>
        setTimeout(() => {
            resolve(`This is post ID ${id}`);
        }, 500)
    );
}