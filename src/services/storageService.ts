import cloudinary from 'cloudinary';



export const uploadToStorage = async (file: any, destination: string) => {
    cloudinary.v2.config({ 
        cloud_name: 'dxbsisqhz', 
        api_key: '173752434692584', 
        api_secret: 'SCbWbowGAbuxDCu-D3izP_0g4r0' 
    });

   const response = await cloudinary.v2.uploader.upload(file.path, { 
       public_id: destination 
    });

    return response;
}