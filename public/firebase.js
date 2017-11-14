//<!-- update the version number as needed -->
<script defer src="/__/firebase/4.6.2/firebase-app.js"></script>
//<!-- include only the Firebase features as you need -->
<script defer src="/__/firebase/4.6.2/firebase-auth.js"></script>
<script defer src="/__/firebase/4.6.2/firebase-database.js"></script>
<script defer src="/__/firebase/4.6.2/firebase-messaging.js"></script>
<script defer src="/__/firebase/4.6.2/firebase-storage.js"></script>
//<!-- initialize the SDK after all desired features are loaded -->
<script defer src="/__/firebase/init.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
  let app = firebase.app();
  let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
  document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
} catch (e) {
  console.error(e);
  document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
}
});
</script>

//ADD TO INDEX.JS
//<script type="text/javascript" src="./firebase.js"/>