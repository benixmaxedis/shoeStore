const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex rounded-full px-7 py-4 justify-center items-center gap-2 font-montserrat text-lg leading-none border
    ${
      backgroundColor
        ? `${backgroundColor} ${borderColor} ${textColor}`
        : 'bg-coral-red text-white border-coral-red'
    } =${fullWidth && 'w-full'}
    
    `}
    >
      {iconURL && (
        <img
          className="ml-2 rounded-full h-5 w-5"
          alt="Button icon"
          src={iconURL}
        />
      )}
      {label}
    </button>
  );
};

export default Button;
