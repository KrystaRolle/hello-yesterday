import { useState } from "react";
import { AddPhoto } from "../addPhotos/AdminAddPhotos";
import { AdminDelete } from "../delete/AdminDelete";

export const AdminAddAndDeletePhotoContainer = () => {
    const [button, setButton] = useState()
   
    return  <>
     <AdminDelete setterFunction={ setButton } />
     <AddPhoto buttonState = { button } />
     </>
}