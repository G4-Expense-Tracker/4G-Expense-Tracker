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

}

export async function createNewTree(goalId) {

}