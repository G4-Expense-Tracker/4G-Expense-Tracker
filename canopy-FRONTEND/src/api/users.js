export async function loginUser(email, password) {
  const res = await fetch(import.meta.env.VITE_APP_LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Login failed");
  }

  return data;
}

export async function logoutUser() {
    const res = await fetch(import.meta.env.VITE_APP_LOGOUT_URL, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || 'Logout failed')
    }

    return data;
}

export async function registerUser() {

}

export async function getUserSession() {

}

export async function editUser() {

}

export async function deleteUser() {
    
}