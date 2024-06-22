import {Stack} from "@mui/material";

interface InputLabelProps {
    upperText: string;
    labelText: string;
}

const InputLabel = (props: InputLabelProps) => {
    return (
        <div className="input-container-upper-text" style={{width: '55ch', height: '7ch'}}>
            <Stack gap={1}>
                <label>
                    {props.upperText}

                </label>
                <input type="text" placeholder={props.labelText} style={{
                    width: '55ch', height: '7ch', borderRadius: '10px', borderWidth: '1px', borderColor: '#D1D5DB',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
                }}/>
            </Stack>
        </div>

    )
}

export default InputLabel;
