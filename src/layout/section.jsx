import PropTypes from "prop-types";

const SectionLayout = ({ children }) => {
  return <div className="min-h-screen">{children}</div>;
};

SectionLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionLayout;
