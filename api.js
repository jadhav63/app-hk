const API_URL = "YOUR_APPS_SCRIPT_WEB_APP_URL"; // paste your deployed script URL

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
