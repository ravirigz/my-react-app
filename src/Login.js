export async function getData() {
    try {
        const response = await fetch('Login.json');

        if (!response.ok) {
            console.error(`Error fetching Login.json: Status ${response.status}`);
            return null;
        }

        const result = await response.json();
        return result;

    } catch (error) {
        console.error("Network or JSON parsing error:", error);
        return null;
    }
}

export async function loginFormLogic(inputUsername, inputPassword) {
    const loginData = await getData();
    
    const trimmedUsername = inputUsername.trim();
    const trimmedPassword = inputPassword.trim();
    
  console.log("Input Username (Trimmed):", `[${trimmedUsername}]`);
    console.log("Input Password (Trimmed):", `[${trimmedPassword}]`);
    console.log("JSON Username:", `[${loginData ? loginData.username : 'N/A'}]`);
    console.log("JSON Password:", `[${loginData ? loginData.password : 'N/A'}]`);

    if (loginData && trimmedUsername === loginData.username && trimmedPassword === loginData.password) {
        return { success: true };
    } else {
        return { success: false };
    }
}