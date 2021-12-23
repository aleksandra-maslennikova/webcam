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
  const [facingMode, setFacingMode] = useState("user");

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  return (
    <h3>
      <h3> Mode:{facingMode === "user" ? "Front" : "Rear"}</h3>
      <Webcam
        audio={false}
        height={500}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={500}
        videoConstraints={{ ...videoConstraints, facingMode }}
      />
      <button onClick={capture}>Capture photo</button>
      <button onClick={() => setFacingMode("user")}>Front camera</button>
      <button onClick={() => setFacingMode("environment")}>Rear camera</button>
      {image && <img src={image}></img>}
    </h3>
  );
};
