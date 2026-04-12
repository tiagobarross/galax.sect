interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
};

export function Spinner({ size = 'md', className = '' }: SpinnerProps) {
  return (
    <div
      className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-eletric-blue border-t-transparent ${className}`}
      role="status"
      aria-label="Carregando"
    />
  );
}
