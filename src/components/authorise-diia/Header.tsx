export function Header() {
  return (
    <div style={{
      height: '32px',
      paddingBottom: '40px',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      display: 'flex'
    }}>
      <div style={{
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'inline-flex'
      }}>
        <div style={{
          color: '#262626',
          fontSize: '20px',
          fontFamily: 'Lato',
          fontWeight: 500,
          lineHeight: '32px',
          letterSpacing: '0.15px',
          wordWrap: 'break-word'
        }}>
          Авторизація
        </div>
        <button style={{backgroundColor: 'white', border: '0'}}>
          <img src="close.svg" alt="buttonpng" />
        </button>
      </div>
    </div>
  );
}