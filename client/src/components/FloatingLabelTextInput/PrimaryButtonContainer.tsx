interface PrimaryContainerProps {
    children: React.ReactNode;
    className?: string
}

export const PrimaryButtonContainer: React.FC<PrimaryContainerProps> = ({children, className}) => {
    return(
        <div className={`bg-gradient-to-br from-neutral-900/30 to-neutral-400/0 rounded-[40px] shadow-[12px_12px_12.899999618530273px_-6px_rgba(0,0,0,0.25)] border border-neutral-900 backdrop-blur-[5px] hover:border-primary-300 hover:from-primary-200/30 transition-all duration-300 ${className}`}>
            {children}
         </div>
    )
}