import { v2 as _cloudinary } from "cloudinary"



// cloudinary cnfig
const cloudinary = () => {
    // const config = useRuntimeConfig()

    _cloudinary.config({
        cloud_name: cloudinaryCloudName,
        api_key: cloudinaryApiKey,
        api_secret: cloudinaryApiSecret
    })

    return _cloudinary
}


// upload to cloudinary
export const uploadToCloudinary = (image) => {
    return new Promise((resolve, reject) => {
        console.log(image)
        cloudinary().uploader.upload(image, (error, data) => {
            if (error) {
                reject(error)
            }
            resolve(data)
        })
    })
}