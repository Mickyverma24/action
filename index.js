// API for get requests
const index = async(url) => {
  let fetchRes =(await fetch(url));
  console.log(fetchRes);
};

const urls = [
  "https://pmnodeclient.onrender.com",
  "https://pmnodeclient-t6nh.onrender.com",
];
const run = async () => {
  await Promise.all(urls.map((u) => index(u)));
};
run();