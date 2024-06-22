interface SmallButtonProps {
    children: React.ReactNode;
}

export function ButtonSmall({ children }: SmallButtonProps) {
    return (
        <button className="button-small">
            {children}
        </button>
    );
}

export function ButtonSmallSecondary({ children }: SmallButtonProps) {
    return (
        <button className="button-small-secondary">
            {children}
        </button>
    );
}