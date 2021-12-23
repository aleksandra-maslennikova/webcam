import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 500,
  height: 500,
  facingMode: "user",
};

export const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState("");

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  return (
    <>
      <Webcam
        audio={false}
        height={500}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={500}
        videoConstraints={videoConstraints}
      />

      <button onClick={capture}>Capture photo</button>
      {image && <img src={image}></img>}
    </>
  );
};
