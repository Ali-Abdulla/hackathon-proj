import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      paddingTop: '16px',
      paddingBottom: '32px',
      paddingLeft: '24px',
      paddingRight: '24px',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: '24px',
      display: 'inline-flex'
    }}>
      {children}
    </div>
  );
}

export function Header() {
  return (
    <div style={{
      alignSelf: 'stretch',
      height: '80px',
      padding: '24px',
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
          Вибір ролі
        </div>
        <div style={{
          width: '24px',
          height: '24px',
          position: 'relative'
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            left: '6px',
            top: '6px',
            position: 'absolute',
            border: '2px #4B5563 solid'
          }}></div>
        </div>
      </div>
    </div>
  );
}

interface FlexColumnProps {
  children: React.ReactNode;
}

export function FlexColumn({ children }: FlexColumnProps) {
  return (
    <div style={{
      alignSelf: 'stretch',
      height: '182px',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: '24px',
      display: 'flex'
    }}>
      {children}
    </div>
  );
}

interface CardProps {
  text: string;
}

export function Card({ text }: CardProps) {
  return (
    <button style={{
      alignSelf: 'stretch',
      width: '406px',
      height: '79px',
      paddingLeft: '17px',
      paddingRight: '17px',
      paddingTop: '9px',
      paddingBottom: '9px',
      background: '#C7D2FE',
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
      borderRadius: '16px',
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'inline-flex',
    }} onClick={() => console.log('Clicked')}>
      <div style={{
        color: '#075985',
        fontSize: '16px',
        fontFamily: 'Lato',
        fontWeight: 500,
        lineHeight: '24px',
        wordWrap: 'break-word'
      }}>
        {text}
      </div>
    </button>
  );
}