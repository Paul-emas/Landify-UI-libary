import PropTypes from 'prop-types';

const Heading = ({ as, className, children, ...props }) => {
  const As = as;
  return (
    <As
      className={`leading-relaxed 2xl:leading-relaxed font-extrabold text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </As>
  );
};

Heading.propType = {
  as: PropTypes.string,
  className: PropTypes.string,
};

Heading.defaultProps = {
  as: 'h1',
  size: '7xl',
  className: '',
};

export default Heading;
