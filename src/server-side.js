const express = require('express');
const path = require('path');
const app = express();
const port = 6001;

app.use(express.static('public'));

const VueApp = (res) => res.sendFile(path.join(__dirname, '../public/vue-app/index.html'));
const MusicApp = (res) => res.sendFile(path.join(__dirname, '../public/music-app/index.html'));
const ReactApp = (res) => res.sendFile(path.join(__dirname, '../public/react-app/index.html'));

app.get(['/vue-app', '/vue-app/*'], (req, res) => {
  return VueApp(res);
});
app.get(['/music-app', '/music-app/*'], (req, res) => {
  return MusicApp(res);
});
app.get(['/react-app', '/react-app/*'], (req, res) => {
  return ReactApp(res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
