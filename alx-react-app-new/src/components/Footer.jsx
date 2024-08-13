const Footer = () => {
    
    return(
        <footer style={{
            backgroundColor: 'navy',
            color: 'white',
            padding: '15px 0',
            textAlign: 'center',
            marginTop: '20px'
        }}>
            <p  style={{
                margin: '0',
                fontSize: '14px'
            }}>© {new Date().getFullYear()} City Lovers</p>
        </footer>
    )
}
export default Footer