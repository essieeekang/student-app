import './Student.css';
import PropTypes from 'prop-types';

const Student = (props) => {
  const nameColor = props.isPresent ? 'green' : 'red';
  const attendanceButtonClicked = () => {
    props.onPresenceToggle(props.id);
  };

  return (
    <>
      <ul>
        <li className={nameColor}>Nickname: {props.name}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={attendanceButtonClicked}>Toggle if {props.name} is present</button>
    </>
  );
};

Student.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresent: PropTypes.bool.isRequired,
  onPresenceToggle: PropTypes.func.isRequired,
};

export default Student;