import Button from '../Button'
import Action from '../Action'
import './menu.css'
import MenuIcon from '../MenuIcon'

const Menu = () => (
    <nav className="menu">
        <div className="wrapper-actions">
            <Action href="#nft" content="NFT" />
            <Action href="#token" content="token" />
            <Action href="#tean" content="team" />
            <Action href="#whitepaper" content="whitepaper" className="highlight"/>
        </div>
        <Button />
        <MenuIcon />
    </nav>
)

export default Menu