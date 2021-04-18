
export async function getAllUsers() {
    const response = await fetch("/api/brands");
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/api/brand`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({brand: data})
      })
    return await response.json();
}