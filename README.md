
# aspire-clone

This project uses react-native, react-redux for state management with thunk as middleware, react navigation V5 for the navigation, react-native-svg-transormer for using the svgs like jsx tags. Currently there are only two screens debit card screens and set limit screen.

The components directory contains the components, scren directory contains screens and aseets contains the svg icons use throughout. App.js file exports the root component provided with store and navigation.

Redux code is organised in ducks pattern

The bottom tab navigator is nested inside another stack navigator with set limit screen.

I have also added github action to run on every PR and push to master which builds and outputs apkfor android. I dont have an apple developer account to archive ipa so it is omitted.

To run project:

1. Clone project,
2. switch to aspireUI directory inside project
3. Run $yarn install

For android :
4. run $yarn android

For ios:
4. run $cd ios && pod install
5. then open aspireUI.xcworkspace from ios directory with XCode and run normally on simulator of your choice.
