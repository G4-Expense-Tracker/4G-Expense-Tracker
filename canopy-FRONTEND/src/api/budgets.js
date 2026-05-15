const API = import.meta.env.VITE_APP_BASE_URL

export async function viewBudget(timeframe) {
    const params = new URLSearchParams({ timeframe });

    const res = await fetch(`${API}/view?${params.toString()}`, {
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

}