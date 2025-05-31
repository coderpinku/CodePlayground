import React from 'react';

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'lg';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  icon,
  disabled = false,
  className = '',
  size,
}) => {
  const sizeClass = size ? `btn-${size}` : '';

  return (
    <button
      className={`btn btn-${variant} ${sizeClass} d-flex align-items-center gap-2 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default CustomButton;
