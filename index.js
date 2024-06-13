// API for get requests
const index = async(url) => {
  let fetchRes =(await fetch(url));
  const resp = await fetchRes.json();
  console.log(resp);
};

const urls = [
  "https://pmnodeclient.onrender.com",
  "https://pmnodeclient-t6nh.onrender.com",
];
const run = async () => {
  await Promise.all(urls.map((u) => index(u)));
};
run();