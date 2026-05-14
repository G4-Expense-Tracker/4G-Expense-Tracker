const api = import.meta.env.VITE_APP_BASE_URL

export async function loginUser(email, password) {
  const res = await fetch(`${api}/users/login`, {
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
    const res = await fetch(`${api}/users/logout`, {
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

export async function registerUser(firstName, lastName, email, password, phone) {
    const res = await fetch(`${api}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          phone_number: phone,
        }),
    });

    const data = await res.json();

    if (!res.ok) {
    throw new Error(data.error || "Signup failed");
    }

    return data;
}

export async function getUserSession() {

}

export async function editUser() {

}

export async function deleteUser() {
    
}