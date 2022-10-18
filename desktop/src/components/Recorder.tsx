
import { invokeSaveAsDialog } from "recordrtc";
import { useRecorderPermission } from "../hooks/useRecorderPermission";

export const AudioRecorder = () => {
  const recorder = useRecorderPermission("video");

  const startRecording = async () => {
    recorder.startRecording({ screen: true });
  };

  const stopRecording = async () => {
    await recorder.stopRecording();
    let blob = await recorder.getBlob();
    invokeSaveAsDialog(blob, `random_name.mp4`);
  };

  return (
    <div>
      <button onClick={startRecording}> Start recording</button>
      <button onClick={stopRecording}> Stop recording</button>
    </div>
  );
};