import Dropdown from '../../components/Dropdown';
import ButtonLink from '../../components/ButtonLink';
import HeadsetIcon from '../../assets/images/headset-icon.png'
import keyBoard from '../../assets/images/keyboard-icon.png'
import computer from '../../assets/images/computer-icon.png'
import camera from '../../assets/images/camera-icon.png'
import ExpandIcon from '../../assets/svgs/expand.svg'

function BottomHeader(){
return(
    <>
    <div className="bottom-header">
        <ButtonLink icon={HeadsetIcon} label="Headphones"/>
        <ButtonLink icon={keyBoard} label="Keyboards"/>
        <ButtonLink icon={computer} label="Computer and Accessories"/>
        <ButtonLink icon={camera} label="Camera"/>
        <Dropdown label="All Categories" icon={ExpandIcon} classname="icon" items={Array(12).fill({name: 'Headset', iconName: HeadsetIcon})}/>
    </div>
    </>
)
}

export default BottomHeader;