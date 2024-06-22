interface TitleProps {
    title: string;
}

export function Title({ title }: TitleProps) {
    return (
        <div style={{
            color: '#000000',
            fontSize: '30px',
            fontFamily: 'Lato',
            fontWeight: 600,
            lineHeight: '36px',
            wordWrap: 'break-word'
        }}>
            {title}
        </div >
    );
}