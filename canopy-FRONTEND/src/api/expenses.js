const API = import.meta.env.VITE_APP_BASE_URL

export async function getAllExpenses() {
    const res = await fetch(`${API}/expenses/list?quickExpense=false`, {
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
    const res = await fetch(`${API}/expenses/list?quickExpense=true`, {
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
    const res = await fetch(`${API}/expenses/${expenseId}/view`, {
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
    const res = await fetch(`${API}/expenses/${categoryId}/list`, {
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
    const res = await fetch(`${API}/expenses/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(newExpenseData),
    });

    // For test purpose: 
    // const text = await res.text();
    //   const data = text ? JSON.parse(text) : {};
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to create expense");
    }

    return data;
}

export async function editExpense(expenseId, updatedInfo) {
    const res = await fetch(`${API}/expenses/${expenseId}/edit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(updatedInfo),
    });

    // For test purpose: 
    // const text = await res.text();
    //   const data = text ? JSON.parse(text) : {};
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to edit expense");
    }

    return data;
}

export async function deleteExpense(expenseId) {
    const res = await fetch(`${API}/expenses/${expenseId}/delete`, {
        method: "POST",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to delete expense");
    }

    return data;
}

export async function getCategoryTotals(startDate, endDate) {
    const params = new URLSearchParams({ startDate, endDate });

    const res = await fetch(`${API}/expenses/category-totals?${params.toString()}`, {
        method: "GET",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch category totals");
    }

    return data.total;
}

export async function compareCategories(
    categoryId,
    currentStart,
    currentEnd,
    prevStart,
    prevEnd
) {
    const params = new URLSearchParams({
        currentStart,
        currentEnd,
        prevStart,
        prevEnd
    })

    const res = await fetch(`${API}/expenses/category/${categoryId}/comparison?${params.toString()}`, {
        method: "GET",
        credentials: "include",
    })

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch category comparison");
    }

    return data.comparison;
}

export async function getCategoryTopChanges(
    currentStart,
    currentEnd,
    prevStart,
    prevEnd
) {
    const params = new URLSearchParams({
        currentStart,
        currentEnd,
        prevStart,
        prevEnd,
    });

    const res = await fetch(`${API}/expenses/category/top-changes?${params.toString()}`, {
            method: "GET",
            credentials: "include",
        }
    );

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch top changes");
    }

    return data.topChanges;
}

export async function getDateRangeTotal(startDate, endDate) {
    const params = new URLSearchParams({ startDate, endDate });

    const res = await fetch(`${API}/expenses/total?${params.toString()}`, {
        method: "GET",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to fetch date range total");
    }

    return data.dateRangeTotal;
}