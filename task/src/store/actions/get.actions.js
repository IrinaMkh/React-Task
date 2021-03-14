import fetch from '../fetch';

export const getHeaderData = async (
    store,
    request = fetch
) => {
    store.setState({
        headerData: {
            ...store.headerData
        }
    })
    try {
        const {data} = await request({
            endPoint: 'https://app.highattendance.com/content-app-cats/jVV3Q?appId=2731&eventId=2570',
            method: 'GET',
        })
        store.setState({
            headerData: data
        })

    } catch (error) {
        console.log(error)
    }
}

export const getCategoriesList = async (
    store,
    request = fetch
) => {
    store.setState({
        categoriesList: {
            ...store.categoriesList
        }
    })
    try {
        const {data} = await request({
            endPoint: 'https://app.highattendance.com/app-contents/jVV3Q?appId=2731&eventId=2570',
            method: 'GET',
        })
        store.setState({
            categoriesList: data
        })

    } catch (error) {
        console.log(error)
    }
}

export const getDataByContentId = async (
    store,
    contentID,
    request = fetch
) => {
    store.setState({
        content: {
            ...store.content
        }
    })
    try {
        const {data} = await request({
            endPoint: `https://app.highattendance.com/contents/count-view/${contentID}/2731/2570`,
            method: 'GET',
        })
        store.setState({
            content: data
        })
        return data;

    } catch (error) {
        console.log(error)
    }
}

export const getImages = async (
    store,
    request = fetch
) => {
    store.setState({
        imagesList: {
            ...store.content
        }
    })
    try {
        const {data} = await request({
            endPoint: `https://app.highattendance.com/content-thumbnail-url/2731`,
            method: 'GET',
        })
        store.setState({
            imagesList: data
        })


    } catch (error) {
        console.log(error)
    }
}