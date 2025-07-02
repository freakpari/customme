import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [token, setToken] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                alert('ورود موفقیت‌آمیز بود');
                navigate('/userprofile');
            } else {
                setError(data.detail || 'ورود ناموفق بود');
            }
        } catch (err) {
            setError('خطا در ارتباط با سرور');
        }
    };

    return (
        <div style={{margin:"auto"}} >
            <h2 style={{marginRight:"120px"}}>ورود به حساب کاربری</h2>
            <form onSubmit={handleSubmit} >
                <div >
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div >
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                {error && <p >{error}</p>}
                <button style={{marginRight:"210px"}} type="submit" >ورود</button>
            </form>
        </div>
    );
};

export default Login;
