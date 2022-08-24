import PropTypes from "prop-types"
import { TextField } from "@mui/material"

function TextFieldComponent({label, variant, type, onChange}){
    return (
        <TextField label={label} variant={variant} type={type} onChange={onChange} />
    )
}

TextFieldComponent.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.oneOf(['outlined','filled','standard']),
    type: PropTypes.oneOf(['number','text','password']),
    onChange: PropTypes.func
}

export default TextFieldComponent