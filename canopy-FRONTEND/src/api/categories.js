const API = import.meta.env.VITE_APP_BASE_URL

export async function createNewCategory() {


    if (!res.ok) {
        throw new Error(data.error || "Failed to create new category");
    }

    return data;
}

export async function getSingleCategory() {


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