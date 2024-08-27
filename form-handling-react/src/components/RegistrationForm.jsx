import { useState } from "react";
const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.length < 5) {
            alert(`Username must be at least 3 characters long.`);
            return;
        }
        if (password.length < 8) {
            alert("Password must be at least 8 characters");
            return;
          }
          if (!email.includes('@') || !email.includes('.')) {
            alert("Invalid email");
            return;
          }        
        resetForm()
        
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    };
    const resetForm = () => {
        setUsername('');
        setEmail('');
        setPassword('');
      };
      

    return (
        <>
        <form onSubmit={handleSubmit}>

            <div>
            <label htmlFor="username">Username:</label>
            <input 
                type="text"
                value={username} 
                placeholder="Enter your Username"
                required
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>

            <div>
            <label htmlFor="email">Email:</label>
            <input 
                type="email"
                value={email} 
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div>
            <label htmlFor="password">Password:</label>
            <input 
                type="password"
                value={password} 
                placeholder="Enter your Password"
                required
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button 
                type="submit">
                    Register
            </button>
        </form>
        </>
    )
}
export default RegistrationForm;