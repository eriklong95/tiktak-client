export function stubFetch(request) {
    return new Promise((resolve, reject) => {
        const fail = prompt(`Do you want the request to ${request.url} to fail? (y/n)`);
        if (fail === 'y') {
            reject(new Error('Network error'));
        } else {
            const statusCode = prompt('Enter desired status code of response');
            const body = prompt('Enter desired body of response');
            resolve(new Response(body, { status: statusCode }));
        }
    });
}
