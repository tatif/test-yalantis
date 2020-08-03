import { useState, useEffect } from 'react';


export const useGetUsers = () => {
    const [hasError, setErrors] = useState(false);
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users');
            result
                .json()
                .then(result => setUsers(result))
                .catch(errors => {
                    setLoading(null);
                    setErrors(errors)
                });
        };

        fetchData();
    }, []);

    return { loading, hasError, users };
}