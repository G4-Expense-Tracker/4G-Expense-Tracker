const API = import.meta.env.VITE_APP_BASE_URL

export async function getAllTrees() {
    const res = await fetch(`${API}/trees/list`, {
        method: "GET",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch trees");
    }

    return data.userTrees;
}

export async function getGoalTrees(goalId) {
    const res = await fetch(`${API}/trees/${goalId}/view`, {
        method: "GET",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch goal trees");
    }

    return data.goalTrees;
}

export async function createNewTree(goalId) {

}