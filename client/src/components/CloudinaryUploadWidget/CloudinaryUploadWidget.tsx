import React, { useEffect } from 'react'
import { CloudinaryResult } from '../../interfaces/CloudinaryResult';
import { Button } from '../Button/Button';

interface Props {
  onSuccess: (result: CloudinaryResult['info'])=>void
}

const CloudinaryUploadWidget : React.FC<Props> = ({ onSuccess }) => {

  useEffect(() => {
    const widget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: "lakarina",
        uploadPreset: "yx2lxsif"
      },
      (error: unknown, result: CloudinaryResult) => {
        if (!error && result && result.event === "success") {
          onSuccess(result.info);
        }
      }
    );

    document.getElementById("upload_widget")?.addEventListener(
      "click",
      function () {
        widget.open();
      },
      false
    );
  }, [onSuccess])

  return (
    // <button id="upload_widget" className="cloudinary-button">Upload</button>
    <Button type="button" id='upload_widget' text='Upload' className='outlined'/>
  )
}

export { CloudinaryUploadWidget }