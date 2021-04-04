/**
 * get 12 random users from random users from randomuser.me
 *
 * @returns object
 */
const loadEmployees = async () => {
    try {
        const response = await fetch(
            "https://randomuser.me/api/?results=12&nat=us"
        );
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            return data.results;
        } else {
            return false;
        }
    } catch (error) {
        throw "Couldn't load employees";
    }
};
