import PropTypes from 'prop-types';

export const Notification = ({name}) => {
    return (
        <div>
        <h2>{name}</h2>
        </div>
    )
}

Notification.propsTypes = {
    name: PropTypes.string.isRequired
}