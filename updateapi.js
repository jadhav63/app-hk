const API_URL = "https://script.google.com/macros/s/AKfycbzYHsYYNCCQYUZMfCDOpQ0NanZDFKdSmafipOK-KAke_jz7i-DdPC2FuiCzq7jgjQxt/exec"; // paste your deployed script URL 

export async function login(username, password) {
  const res = await fetch(`${API_URL}?action=login&username=${username}&password=${password}`);
  return res.json();
}

export async function getData() {
  const res = await fetch(`${API_URL}?action=getData`);
  return res.json();
}

export async function updateRoom(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
