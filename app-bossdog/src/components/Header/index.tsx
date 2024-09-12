import Logo from '../Logo'
import Button from '../Button'
import Action from '../Action'
import './header.css'

const Header = () => (
    <header>
        <Logo />
        <nav>
            <Action href="#nft" content="NFT" />
            <Action href="#token" content="token" />
            <Action href="#tean" content="team" />
            <Action href="#whitepaper" content="whitepaper" className="highlight"/>
            <Button />
        </nav>
    </header>
)

export default Header
