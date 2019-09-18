import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const SynNote = ({
  onClick, disabled, className, text,
}) => (
  <button
    type="button"
    className={`button ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
)

SynNote.propTypes = {
  onClick: PropTypes.func,
  /** Disable the button */
  disabled: PropTypes.bool,
  className: PropTypes.string,
  /** Text of the button */
  text: PropTypes.string,
}

SynNote.defaultProps = {
  onClick: () => {},
  disabled: false,
  className: null,
  text: 'Click Me',
}

export default SynNote
