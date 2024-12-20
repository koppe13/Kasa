import vstar from "../asset/images/Vector.png";
import gstar from "../asset/images/gVector.png"



const Rating = ({classement}) => {
    const Star = []

for (let star=1 ;star <= 5; star++ ) {
    if(star <= classement){
       Star.push(
            <img className='star' src={vstar}></img>
    ) }else {
        Star.push(
            <img className='star' src={gstar}></img>
        )
    }

    }

return (
<div className="notation">

{Star}

</div>
)

}

export default Rating
