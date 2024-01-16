import { prisma } from ".";



// create tweet
export const createTweet = (tweetData) => {
    return prisma.tweet.create({
        data: tweetData
    })
}


// get all tweets
export const getTweets = (params = {}) => {
    return prisma.tweet.findMany({
        ...params
    })
}


// get a single tweet by its id
export const getTweetById = (tweetId, params = {}) => {
    return prisma.tweet.findUnique({
        ...params,
        where: {
            ...params.where,
            id: tweetId
        },
    })
}