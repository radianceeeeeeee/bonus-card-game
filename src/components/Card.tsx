import spades from "./../assets/spades.png";
import mushroom1up from "./../assets/1up.png";
import mushroom from "./../assets/mushroom.png";
import star from "./../assets/star.png";
import brick from "./../assets/brickwall.png";
import box from "./../assets/box.png";
import flower from "./../assets/carnivorous-plant.png";

export default function Card( { content, id, isFlipped, onFlip } : { content: string, id: number, isFlipped: boolean, onFlip: () => void } ) {  
    return (
        <div className='mx-auto' 
            onClick={onFlip} 
        >
            <div className='
                bg-white
                rounded-md
                h-36 w-28
                p-2
                mt-8
                mb-7
            '>
                {
                    isFlipped ?
                    <div className='flex items-center h-full w-full text-center'>
                        <div className='p-2'>
                            {
                                content === "Mushroom" ? <img src={mushroom} alt="Mushroom"></img> :
                                content === "Star" ? <img src={star} alt="Star"></img> :
                                content === "1UP" ? <img src={mushroom1up} alt="1UP"></img> :
                                content === "Flower" ? <img src={flower} alt="Piranha Plant"></img> :
                                content === "10 Coins" ? <img src={brick} alt="Brick"></img> :
                                content === "20 Coins" ? <img src={box} alt="? Block"></img> :
                                content
                            }
                        </div>
                    </div> :
                    <div className='flex items-center h-full w-full text-center bg-slate-300 rounded-md'>
                        <div className='p-2'>
                            <img src={spades} alt="Spades"></img>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
