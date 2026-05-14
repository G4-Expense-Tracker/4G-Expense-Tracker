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

export async function getExpense() {
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

export async function getExpensesInCategory() {

}

export async function createNewExpense() {

}

export async function editExpense() {
    
}

export async function deleteExpense() {

}

export async function getCategoryTotals() {

}

export async function compareCategories() {

}

export async function getCategoryTopChanges() {

}

export async function getDateRangeTotal() {

}