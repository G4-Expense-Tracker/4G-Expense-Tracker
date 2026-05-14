const API = import.meta.env.VITE_APP_BASE_URL

export async function getAllGoals() {
    const res = await fetch(`${API}/goals/list`, {
        method: "GET",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch goals");
    }

    return data.goals;
}

export async function getGoal(goal_id) {
    const res = await fetch(`${API}/goals/${goal_id}`, {
        method: "GET",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch goal");
    }

    return data.goal;
}

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

export async function editGoal(goal_id, updatedInfo) {
    const res = await fetch(`${API}/goals/${goal_id}/edit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(updatedInfo),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to edit goal");
    }

    return data;
}

export async function getGoalProgress(goal_id) {
    const res = await fetch(`${API}/goals/${goal_id}/progress`, {
        method: "GET",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch goal progress");
    }

    return data;
}

export async function goalLevelUp(goal_id) {
    const res = await fetch(`${API}/goals/${goal_id}/levelUp`, {
        method: "POST",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to level up goal");
    }

    return data;
}

export async function deleteGoal(goal_id) {
    const res = await fetch(`${API}/goals/${goal_id}/delete`, {
        method: "POST",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to delete goal");
    }

    return data;
}

export async function addGoalProgress(goal_id) {

}

export async function newGoalAction(goal_id) {
    const res = await fetch(`${API}/goals/${goal_id}/action`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ action_type_id }),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to log goal action");
    }

    return data;
}