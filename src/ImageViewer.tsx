import * as React from "react"

type Props = {
    images: string[],
    height: number
}

type State = {
    images: JSX.Element[],
    imageNum: number
}

const imagesPerSide = 2;

class ImageViewer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const images: JSX.Element[] = props.images.map((image) => <ImageContainer url={image} />);
        this.state = {images: images, imageNum: 0} ;
    }

    render() {
        const images = this.state.images;
        const orderedImages: JSX.Element[] = [];

        let current = this.state.imageNum;
        for (let i = 0; i < imagesPerSide * 2 + 1; i++) {
            orderedImages.push(images[current++]);
            if (current === images.length) {
                current = 0;
            }
        }

        return (
            <div className="eagle_images_container" style={{height:this.props.height}}>
                <div onClick={(event) => this.next()} className="images_button" >
                    <img src={require("./resources/img/back.png")} />
                </div>
                <div className="eagle_images" style={{height:"100%"}} >
                    {orderedImages}
                </div>
                <div onClick={(event) => this.prev()} className="images_button" >
                    <img src={require("./resources/img/back.png")} style={{transform: "rotate(180deg)"}}/>
                </div>
            </div>
        );
    }

    prev() {
        const oldNum = this.state.imageNum;
        const newNum = oldNum === (this.state.images.length - 1) ? 0 : oldNum + 1;
        this.setState({images: this.state.images, imageNum: newNum} );
    }

    next() {
        const oldNum = this.state.imageNum;
        const newNum = oldNum === 0 ? this.state.images.length - 1 : oldNum - 1;
        this.setState({images: this.state.images, imageNum: newNum} )
    }
}

type ImageProps = {
    url: string
}

class ImageContainer extends React.Component<ImageProps, State> {

    render() {
        return <img src={this.props.url} className="eagle_image"/>;
    }
}

export default ImageViewer