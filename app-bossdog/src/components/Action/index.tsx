import './action.css'

const Action = ({ href, content, className = '' } : { href: string, content: string, className?: string }) => (
    <a href={href} className={className}>{content}</a>
)

export default Action
