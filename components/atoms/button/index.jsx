
const Button = ({
    children,
    type = 'button',
    className = '',
    disabled = false,
    handleClick
  }) => (
    <button
      type={type}
      className={`inline-flex items-center ${className}`}
      onClick={() => handleClick && handleClick()}
      disabled={disabled}
    >
      {children}
    </button>
  )
  
  export default Button