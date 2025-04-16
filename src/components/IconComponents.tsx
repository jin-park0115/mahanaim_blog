import { IconType } from "react-icons";
import PropTypes from "prop-types";

interface IconStar {
  icon: IconType;
  size?: number | string; // size는 optional로 선언
}

const IconComponent = ({ icon: Icon, size = 24 }: IconStar) => {
  return <Icon size={size} />;
};

IconComponent.propTypes = {
  icon: PropTypes.func.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default IconComponent;
