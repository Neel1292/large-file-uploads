export default function Button({
  variant = 'primary', // 'primary' | 'outline'
  bgColor,
  textColor,
  borderColor,
  onClick,
  type = 'button',
  disabled,
  children,
  className = '',
  style = {},
  fullWidth,
}) {
  const baseClass = variant === 'outline' ? 'btn btn-outline' : 'btn btn-primary';

  const mergedStyle = {
    ...style,
    ...(fullWidth ? { width: '100%' } : null),
    ...(bgColor ? { backgroundColor: bgColor } : null),
    ...(textColor ? { color: textColor } : null),
    ...(variant === 'outline' && borderColor ? { borderColor } : null),
  };

  return (
    <button
      type={type}
      className={`${baseClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={mergedStyle}
    >
      {children}
    </button>
  );
}

