function WelcomeMessage() {
    return (
        <div style={{ 
            backgroundColor: '#f0f8ff', 
            padding: '20px', 
            borderRadius: '10px', 
            textAlign: 'center',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <h1 style={{ 
                color: '#007acc', 
                fontSize: '30px', 
                marginBottom: '10px'
            }}>
                Hello everyone, I am learning React at ALX!
            </h1>
            <p style={{ 
                color: '#333', 
                fontSize: '20px'
            }}>
                I am learning about JSX!
            </p>
            
        </div>
    );
}

export default WelcomeMessage;