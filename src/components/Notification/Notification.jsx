import styles from './Notification.module.css'
const { Component } = require("react");


class Notification extends Component {
    render() {
        const { message } = this.props;
        return <p className={styles.notification}>{message}</p>
    }
}

export default Notification