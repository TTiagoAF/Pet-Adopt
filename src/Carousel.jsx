import { Component } from "react";

//Deixa mudar a foto de cada pet
class Carousel extends Component {
    state = {
        active: 0
    }

    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    }

    handleIndexClick = (e) => {
        this.setState({
            active: +e.target.dataset.index,
        });
    };

    render () {
    const { active } = this.state
    const { images } = this.props
        return (
            <div className="carousel">
                <img src={images[active]} alt="animal hero" /> 
                    <div className="carousel-smaller">
                        {images.map((photo, index) => (
                            // eslint-disable-next-line
                            <img data-index={index} onClick={this.handleIndexClick} src={photo} alt="animal tumbnail" key={photo} className={index === active ? "active": ""}/>
                    ))}

                </div>
            </div>
        )
    }
}

export default Carousel;