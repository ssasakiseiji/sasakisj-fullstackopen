const Notification = ({ message, type}) => {

    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }
        const confirmStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    const styleSetter = (type) => {
        if (type === "error") {
            return errorStyle
        }
        else if (type === "confirm") {
            return confirmStyle
        }
        else {
            return null
        }
    }

    if (message === null) {
        return null
    };

    return (
        <div style={styleSetter(type)}>
            {message}
        </div>
    )

}

export default Notification