const API = import.meta.env.VITE_APP_BASE_URL

export async function createNewGoal(name, targetAmount) {
    const res = await fetch(`${API}/goals/new`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
        name,
        target_amount: Number(targetAmount),
        }),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to create goal");
    }

    return data;
}