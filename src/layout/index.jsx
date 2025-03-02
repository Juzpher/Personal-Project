import PropTypes from "prop-types";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto">{children}</div>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
