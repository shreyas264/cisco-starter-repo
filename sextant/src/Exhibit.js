const Exhibit = ({heading, children}) =>{
    return (
        <div style={styles.exhibit}>
            <h2 style={styles.heading}>{heading}</h2>
            <div>{children}</div>
        </div>
    )
}

const styles ={
    exhibit: {
        border: '1px solid #ddd',
        padding: '1rem',
        margin: '1rem 0',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
    }, 
    heading:{
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: '#333'
    }
};

export default Exhibit;
