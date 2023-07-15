import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
} from '@viro-community/react-viro';

export default function Navigator() {
  function onInitialized(state: ViroTrackingStateConstants, reason: any) {
    console.log('guncelleme', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      console.log('TRACKING NORMAL');
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      console.log('TRACKING UNAVAILABLE');
    }
  }

  return (
    <ViroARScene>
      <ViroText text="helloworld" />
    </ViroARScene>
  );
}
