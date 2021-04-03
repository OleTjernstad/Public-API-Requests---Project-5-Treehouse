const loadEmployees = async () => {
    try {
        const response = await fetch(
            "https://randomuser.me/api/?results=12&nat=us"
        );
        if (response.ok) {
            const data = await response.json();
            return data.results;
        } else {
            // handle error
            return false;
        }
    } catch (error) {}
};
