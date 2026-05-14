const API = import.meta.env.VITE_APP_BASE_URL

export async function getAllExpenses() {
    const res = await fetch(`${API}/list?quickExpense=false`, {
        method: "GET",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch expenses");
    }

    return data.expenses;
}

export async function getAllQuickExpenses() {
    const res = await fetch(`${API}/list?quickExpense=true`, {
        method: "GET",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch quick expenses");
    }

    return data.expenses;
}

export async function getExpense(expenseId) {
    const res = await fetch(`${API}/${expenseId}/view`, {
        method: "GET",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch expense");
    }

    return data.expense;
}

export async function getExpensesInCategory(categoryId) {
    const res = await fetch(`${API}/${categoryId}/list`, {
        method: "GET",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch category expenses");
    }

    return data.categoryExpenses;
}

export async function createNewExpense(newExpenseData) {
    const res = await fetch(`${API}/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(newExpenseData),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to create expense");
    }

    return data;
}

export async function editExpense(expenseId, updatedInfo) {
    const res = await fetch(`${API}/${expenseId}/edit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(updatedInfo),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to edit expense");
    }

    return data;
}

export async function deleteExpense(expenseId) {
    const res = await fetch(`${API}/${expenseId}/delete`, {
        method: "POST",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to delete expense");
    }

    return data;
}

export async function getCategoryTotals() {

}

export async function compareCategories() {

}

export async function getCategoryTopChanges() {

}

export async function getDateRangeTotal() {

}