import './style.css';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCVbV7T7_KIPg5SXdS8w6OEVAsFFHoq3_c',
  authDomain: 'liff-db.firebaseapp.com',
  databaseURL:
    'https://liff-db-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'liff-db',
  storageBucket: 'liff-db.appspot.com',
  messagingSenderId: '762947850725',
  appId: '1:762947850725:web:e46cb7da49ad802eb85f0c',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// Define the path to the data you want to retrieve
var dataRef = database.ref('entries');

// Retrieve the data
dataRef.on('value', function (snapshot) {
  // The snapshot contains the retrieved data
  var data = snapshot.val();

  // Clear the existing table body
  var dataBody = document.getElementById('data-body');
  dataBody.innerHTML = '';

  // Iterate over the data and populate the table rows
  snapshot.forEach(function (childSnapshot) {
    var key = childSnapshot.key;
    var childData = childSnapshot.val();

    var row = document.createElement('tr');
    var name = document.createElement('td');
    var email = document.createElement('td');
    var tel = document.createElement('td');
    var detail = document.createElement('td');
    var picture = document.createElement('td');
    var latitude = document.createElement('td');
    var longitude = document.createElement('td');

    name.textContent = childData.name;
    email.textContent = childData.email;
    tel.textContent = childData.tel;
    detail.textContent = childData.detail;
    latitude.textContent = childData.latitude;
    longitude.textContent = childData.longitude;

    // Create an image element for the picture
    var image = document.createElement('img');
    image.src = childData.picture;
    image.width = 100; // Set the desired width of the image
    image.height = 100; // Set the desired height of the image

    picture.appendChild(image);

    row.appendChild(name);
    row.appendChild(email);
    row.appendChild(tel);
    row.appendChild(detail);
    row.appendChild(picture);
    row.appendChild(latitude);
    row.appendChild(longitude);

    dataBody.appendChild(row);
  });
});
