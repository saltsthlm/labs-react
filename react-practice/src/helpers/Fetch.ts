const url: string = 'https://randomuser.me/api/?results=10'

export const fetchRandomUserList = async () => {
    try {
        const response = await fetch(url, {
            method: 'GET',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}