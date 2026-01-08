import { ChevronRight } from 'lucide-react'

export default function Button({ 
  children, 
  href = '#', 
  variant = 'primary', 
  showArrow = true,
  className = '',
  onClick
}) {
  const baseStyles = "relative overflow-hidden px-5 py-3 md:px-[20px] md:py-[16px] h-auto md:h-[53px] flex items-center justify-center gap-[10px] font-inter text-[14px] tracking-[0.84px] transition-colors duration-300 group"
  
  const variants = {
    primary: "bg-loopscale-blue text-white",
    secondary: "bg-white text-loopscale-blue border border-loopscale-blue"
  }

  const hoverOverlayColor = {
    primary: "bg-loopscale-blue-dark",
    secondary: "bg-loopscale-blue/10"
  }

  const Component = href ? 'a' : 'button'
  const props = href ? { href } : { onClick }

  return (
    <Component 
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span 
        className={`absolute inset-0 ${hoverOverlayColor[variant]} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out`}
        aria-hidden="true"
      />
      <span className="relative z-10 flex items-center gap-[10px]">
        {children}
        {showArrow && <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </Component>
  )
}
