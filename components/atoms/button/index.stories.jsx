import Button from './index'

const Story = (props) => <Button {...props} />

export const Primary = Story.bind({})
Primary.args = {
    className: "btn-blue btn-lg",
    children: "Primary"
}

export const Disabled = Story.bind({})
Disabled.args = {
    children: "Disabled",
    className: "btn-gray btn-md"
}

export default {
    title: "Button",
    component: Button
}