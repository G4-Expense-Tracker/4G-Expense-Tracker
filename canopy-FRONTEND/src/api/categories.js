const API = import.meta.env.VITE_APP_BASE_URL

export async function createNewCategory() {
    const res = await fetch(`${API}/categories/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(categoryData),
    });

    if (!res.ok) {
        throw new Error(data.error || "Failed to create new category");
    }

    return data;
}

export async function getSingleCategory() {
    const res = await fetch(`${API}/categories/${categoryId}/view`, {
        method: "GET",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch category");
    }

    return data;
}

export async function editSingleCategory() {


    if (!res.ok) {
        throw new Error(data.error || "Failed to edit category");
    }

    return data;
}

export async function deleteSingleCategory() {


    if (!res.ok) {
        throw new Error(data.error || "Failed to delete category");
    }

    return data;
}