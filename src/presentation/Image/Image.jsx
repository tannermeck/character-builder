import './Image.css';

export default function Image({head, torso, legs}){
    return (
        <section className="imageContainer">
            <div className="head"
                style={{ backgroundImage: `url(./${head}-head.png)` 
            }}>
            </div>
            <div className="torso"
                style={{ backgroundImage: `url(./${torso}-torso.png)`
            }}>
            </div>
            <div className="legs"
                style={{ backgroundImage: `url(./${legs}-legs.png)`
            }}>
            </div>
        </section>
    )
}