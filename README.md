# expo-video-choppy-on-android-9.0

The page has one video and 100+ images. Everything works fine for android 8.x and 7.x but video cannot play smoothly on android 9.0

## Reproduce steps
1. `expo init`
2. Choose blank project
3. Edit App.js .
4. Add an Expo Video element for example the one described on https://docs.expo.io/versions/v31.0.0/sdk/video
5. Add 100 different images for example https://github.com/gsunsnackv/expo-video-stutter-on-android-9.0/blob/master/App.js
6. `yarn start` (this opens the expo page)
7. Open an Android emulator with Android 9.0 (Pie) installed
8. Click 'Run on Android device/emulator' on the expo page

## Expect
Expect video to play smoothly

## Actual
Video is choppy

## Notes
Audio is fine. And on Android 8.x and 7.x, everything is fine
