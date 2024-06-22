import {Stack} from "@mui/material";

interface InputLabelProps {
    upperText: string;
    labelText: string;
}

const InputLabel = (props: InputLabelProps) => {
    return (
        <div
            style={{
                width: '450px',
                height: '66px',
                fontSize: '14px',
            }}>
            <label>
                {props.upperText}
            </label>
            <input
                type="text"
                placeholder={props.labelText}
                style={{
                    width: '450px',
                    height: '42px',
                    borderRadius: '10px',
                    borderWidth: '1px',
                    borderColor: '#D1D5DB',
                    paddingLeft: '8px',
                    marginTop: '8px',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                    fontSize: '16px',
                }}/>
        </div>

    )
}

export default InputLabel;
