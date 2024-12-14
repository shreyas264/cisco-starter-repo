const Banner = ({title}) => {
    return(
        <div style={styles.banner}>
            <h1 style={styles.title}>{title}</h1>
        </div>
    )
};

const styles ={
    banner:{
        backgroundColor: "#4CAF50",
        color: 'white',
        textAlign: 'center',
        padding: '1rem'
    },
    title: {
        margin: '0',
        fontSize: '2rem'
    }
}
export default Banner;