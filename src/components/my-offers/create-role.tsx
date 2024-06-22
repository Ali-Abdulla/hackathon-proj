import React from "react";

interface CreateRoleProps {
    text: string;
}

export function CreateRole({ text }: CreateRoleProps) {
    return (
        <button style={{
        }}>
            <p style={{
                color: `#ffffff`,
                fontSize: `2ch`,
                fontFamily: `Lato`,
                fontWeight: 500,
                lineHeight: `3ch`,
                wordWrap: `break-word`
            }}>
                {text}
            </p>
        </button>
    );
}