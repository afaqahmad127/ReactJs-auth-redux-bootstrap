import ProgressBar from 'react-bootstrap/ProgressBar';

function MySpineer({ color, text }) {
  return (
    <ProgressBar
      variant={color}
      animated
      now={100}
      label={text}
      style={{ color: 'black' }}
    />
  );
}

export default MySpineer;
