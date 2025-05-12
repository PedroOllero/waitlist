interface Props{
    children: string
}

export const PinkHighlight: React.FC<Props> = ({ children }: Props) => {
    return(
        <span className="text-secondary-100">
            {children}
        </span>
    )
}