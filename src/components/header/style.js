import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ''
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
        width: '90px',
        height: '90px'
    },
    link: {
        padding: '10px',
        color: 'white'
    }
}));