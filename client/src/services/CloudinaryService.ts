import { Cloudinary } from '@cloudinary/url-gen'
export * from "@cloudinary/url-gen/actions/resize";

const CloudinaryService = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'lakarina'
    }
  })

  return cld;
}

export { CloudinaryService }
