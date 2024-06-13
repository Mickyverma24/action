// API for get requests
const index = (url) => {
  let fetchRes = fetch(url);

  fetchRes
    .then((res) => res.json())
    .then((d) => {
      console.log(d);
    });
};

const urls = [
  "https://pmnodeclient.onrender.com",
  "https://pmnodeclient-t6nh.onrender.com",
];
const run = async () => {
  await Promise.all(urls.map((u) => index(u)));
};
run();