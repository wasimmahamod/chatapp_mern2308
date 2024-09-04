import React, { useState, createRef } from "react";
import ProfileImag from "../assets/signin.jpg";
import { FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

import { FaCloudUploadAlt } from "react-icons/fa";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch , useSelector } from "react-redux";
import { logedinUserInfo } from "../slices/userSlice";

const SIdebar = () => {
  const auth = getAuth();
  let dispatch = useDispatch()
  let data = useSelector((state) => state.userInfo.value);
  const storage = getStorage();
  let [imageModal, setImageModal] = useState(false);
  // react cropper 

  const [image, setImage] = useState(null);
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef();



  let handleImageFile = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  }





  let handleSubmit = () => {
    const storageRef = ref(storage, 'some-child');
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL()
      uploadString(storageRef, message4, 'data_url').then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          }).then(()=>{
            dispatch(logedinUserInfo(auth.currentUser))
          }).then(()=>{
            setImageModal(false)
            setCropData('')
            setImage('')
            
          })
        });
      });
    }
  }

  return (
    <div className=" h-screen py-9 px-8  rounded-4xl ">
      <div className=" w-[186px] h-full rounded-3xl bg-primary ">
        <div className=" text-center pt-9">
          <div className="w-[100px] h-[100px] group relative overflow-hidden  mx-auto rounded-full  ">
            <img className=" w-full h-full  " src={data.photoURL} alt="" />

            <div onClick={() => setImageModal(true)} className="w-full h-full cursor-pointer bg-black/50 opacity-0  group-hover:opacity-100 absolute top-0 left-0 flex justify-center items-center">
              <FaCloudUploadAlt className=" text-white text-2xl" />
            </div>
          </div>
        </div>
        <h2 className="text-white text-xl text-center font-bold font-nunito mt-3">
          {data.displayName}
        </h2>
        <div className="w-full h-[89px] relative  mt-[78px] ">
          <div className="w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary   after:sh after:rounded-s-[25px] "></div>
          <FaHome className=" text-[46px] text-primary absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] " />
        </div>
        <div className="w-full h-[89px] relative  mt-[57px] ">
          <div className="hidden w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary   after:sh after:rounded-s-[25px] "></div>

          <AiFillMessage className=" text-[46px] text-[#BAD1FF] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  " />
        </div>
        <div className="w-full h-[89px] relative  mt-[57px] ">
          <div className="hidden w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary   after:sh after:rounded-s-[25px] "></div>

          <AiFillMessage className=" text-[46px] text-[#BAD1FF] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  " />
        </div>
        <div className="w-full h-[89px] relative  mt-[57px] ">
          <div className="hidden w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary   after:sh after:rounded-s-[25px] "></div>

          <AiFillMessage className=" text-[46px] text-[#BAD1FF] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  " />
        </div>
      </div>

      {imageModal &&

        <div className="w-full h-screen bg-black/70 absolute top-0 left-0 flex justify-center items-center">
          <div className="w-[500px]  bg-white  rounded-md p-5">
            <h1 className=" font-nunito text-2xl font-semibold  text-primary">Upload your profile photo</h1>
            <input onChange={handleImageFile} className=" font-nunito text-xl font-semibold  text-primary mt-4" type="file" />
            {image && 
            <Cropper
              ref={cropperRef}
              style={{ height: 400, width: "100%" }}
              zoomTo={0.5}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              guides={true}
            />
            
            }

            <button
              onClick={handleSubmit}
              className=" bg-primary  px-4 py-2 text-md lg:text-xl font-semibold text-white rounded-2xl mt-[51px] "
            >
              Submit
            </button>
            <button
              onClick={() => setImageModal(false)}
              className=" bg-red-500 ml-2  px-4 py-2 text-md lg:text-xl font-semibold text-white rounded-2xl mt-[51px] "
            >
              Cancel
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default SIdebar;
