import {useState, useEffect } from 'react';
import RecordRTC, { CanvasRecorder, MediaStreamRecorder, RecordRTCPromisesHandler } from "recordrtc";

export const useRecorderPermission = (
  recordingType: RecordRTC.Options["type"]
) => {
  const [recorder, setRecorder] = useState<any>();

  useEffect(() => {
    getPermissionInitializeRecorder();
  }, []);

  const getPermissionInitializeRecorder = async () => {
    let stream = await (navigator as any).mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    let recorder = new RecordRTCPromisesHandler(stream, {
      type: recordingType,
      recorderType: MediaStreamRecorder
    });

    setRecorder(recorder);
  };
  
  return recorder;
};