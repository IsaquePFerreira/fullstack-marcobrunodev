import './action.css'

const Action = ({ href, content } : { href: string, content: string }) => (
    <a href={href}>{content}</a>
)

export default Action
