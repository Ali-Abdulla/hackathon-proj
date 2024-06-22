import {Stack} from "@mui/material";

interface InputLabelProps {
    upperText: string;
    labelText: string;
}

const InputLabel = (props: InputLabelProps) => {
    return (
        <Stack>
            <label className="input-container-upper-text">
                {props.upperText}
            </label>
            <input className="input-container-label">
                {props.labelText}
            </input>
        </Stack>
    )
}

export default InputLabel;
