import { useContext } from 'react';
// import PropTypes from 'prop-types';
import { TextTrainCreatorContext } from '../../context/TextTrainCreator/TextTrainCreatorContext';
console.log(666);
const UserTextToObjects = () => {
  const { textString, addWordsObj } = useContext(TextTrainCreatorContext);

  const array = textString.split('').map((v, i) => ({
    id: i,
    rightValue: v,
    trainValue: null,
  }));

  console.log('array', array);

  addWordsObj(array);
};

// UserTextToObjects.propTypes = {
//   userString: PropTypes.string,
// };
UserTextToObjects();
// export default UserTextToObjects;
