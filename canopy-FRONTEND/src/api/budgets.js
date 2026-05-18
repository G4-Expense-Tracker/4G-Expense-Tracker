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
export async function viewBudget(timeframe) {
    const params = new URLSearchParams({ timeframe });

    const res = await fetch(`${API}/budgets/view?${params.toString()}`, {
        method: "GET",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch budget");
    }

    return data.budget;
}

export async function setBudget(budgetInfo) {
    const res = await fetch(`${API}/budgets/set`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(budgetInfo),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to set budget");
    }

    return data;
}