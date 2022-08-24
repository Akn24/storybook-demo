import TextFieldComponent from '../components/textfield'

export default {
    title: "TextField",
    component: TextFieldComponent,
    argTypes: {onChange: {action: "onChange"}}
}

const Template = args => <TextFieldComponent {...args}/>

export const OutLined = Template.bind({})
OutLined.args = {
    label: "Enter Name", 
    variant: "outlined", 
    type: "text", 
    onChange: {action: ""}
}

export const Filled = Template.bind({})
OutLined.args = {
    label: "Enter Name", 
    variant: "filled", 
    type: "text", 
}

export const Standard = Template.bind({})
OutLined.args = {
    label: "Enter Name", 
    variant: "standard", 
    type: "text", 
}