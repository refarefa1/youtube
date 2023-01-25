import axios from "axios"
import { userService } from "./user.service"
import { utilService } from "./util.service"

const DUMMY_KEY = 'AIzaSyCl5nM1wyx7Mdmjgjra6UdyswCKqQBqhfA'

const PLAYER_KEY = 'videosDB'

async function query(filterBy) {
    let player = _getPlayer()
    let { term } = filterBy
    if (player[term.toLowerCase()]) {
        console.log('Loading from cache...')
        return player[term]
    }
    else {
        console.log('Loading from server...')
        const { data } = await _search(term)
        const res = await _getData(data.items, true)
        player[term.toLowerCase()] = res
        utilService.saveToStorage(PLAYER_KEY, player)
        return player[term.toLowerCase()]
    }
}

async function getVideoById(videoId) {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${DUMMY_KEY}`
    const commentsUrl = `https://www.googleapis.com/youtube/v3/commentThreads?key=${DUMMY_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=20`
    const { data: commentsData } = await axios.get(commentsUrl)
    const comments = _getDataForComments(commentsData.items)
    const { data } = await axios.get(url)
    const video = await _getData(data.items, true)
    video[0].comments = comments
    video[0]._id = data.items[0].id
    return video[0]
}

async function getRelatedVideos(videoId) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&relatedToVideoId=${videoId}&type=video&key=${DUMMY_KEY}`
    const { data } = await axios.get(url)
    const res = await _getData(data.items)
    return res
}

async function getMiniVideoById(videoId) {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${DUMMY_KEY}`
    const { data } = await axios.get(url)
    const video = await _getData(data.items, false)
    video[0]._id = data.items[0].id
    return video[0]
}

async function getUserVideos(type) {
    const user = userService.loadUser()
    let videos = []
    for (var i = 0; i < user[type].length; i++) {
        const videoId = user[type][i]
        const video = await getMiniVideoById(videoId)
        videos.push(video)
    }
    return videos
}

async function _search(term) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${term}&type=video&key=${DUMMY_KEY}`
    return await axios.get(url)
}

function _getDataForComments(items) {
    return items.map(item => {
        return {
            id: item.id,
            imgUrl: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
            name: item.snippet.topLevelComment.snippet.authorDisplayName,
            publishedAt: item.snippet.topLevelComment.snippet.publishedAt,
            txt: item.snippet.topLevelComment.snippet.textDisplay,
        }
    })
}

async function _getData(items, isBigData = true) {
    const finalData = []
    for (var i = 0; i < items.length; i++) {
        const item = items[i]
        let data
        if (isBigData) {
            const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${DUMMY_KEY}`
            const { data: channelData } = await axios.get(channelUrl)
            data = channelData
        }
        const obj = {
            _id: item.id.videoId || data?.items[0].id,
            title: item.snippet.title,
            imgUrl: item.snippet.thumbnails.medium.url,
            publishedAt: item.snippet.publishedAt,
            channelId: item.snippet.channelId,
            channelTitle: item.snippet.channelTitle,
            channelImg: data?.items[0].snippet.thumbnails.default.url,
            description: item.snippet.description || '',
            statistics: { ...data?.items[0].statistics, ...item.statistics } || {},
        }
        finalData.push(obj)
    }
    return finalData
}

function _getPlayer() {
    let player = utilService.loadFromStorage(PLAYER_KEY)
    if (!player) {
        player = {}
        utilService.saveToStorage(PLAYER_KEY, player)
    }
    return player
}

export const playerService = {
    query,
    getRelatedVideos,
    getVideoById,
    getUserVideos
}