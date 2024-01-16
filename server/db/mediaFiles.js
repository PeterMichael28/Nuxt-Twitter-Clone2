import { prisma } from ".";


// creating a new media file
export const createMediaFile = (mediaFile) => {
    return prisma.mediaFile.create({
        data: mediaFile
    })
};
