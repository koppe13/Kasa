import vstar from "../asset/images/Vector.png";
import gstar from "../asset/images/gVector.png"



const Rating = ({classement}) => {
    const nombreEtoile = []

for (let star=1 ;star <= 5; star++ ) {
    if(star <= classement){
       nombreEtoile.push(
            <img key={star} className='star' src={vstar} alt="notation positive"></img>
    ) }else {
        nombreEtoile.push(
            <img key={star} className='star' src={gstar} alt="notation negative"></img>
        )
    }

    }

return (
<div className="notation">

{nombreEtoile}

</div>
)

}

export default Rating
