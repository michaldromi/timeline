const json = [
    {
        "id": "1",
        "title": "Work Songs and spirtuals",
        "text": "African slaves sang siprituals and other christian songs to communicate escape routes or to help them subvert the slavemasters. Many of the songs held the same melodies as songs from the motherland.",
        "img": "http://www.fancyicons.com/free-icons/233/music/png/256/banjo_256.png"
    }, {
        "id": "2",
        "title": "Blues",
        "text": "After the civil war emancipation, African-American struggled to get work. Songs that reflected these struggles were called the blues. The first and second verse of a blues song were the same, but the third was different. Blues singers tended to improvise freely on the unconventional melodies.",
        "img": "http://www.saltburnbluesclub.co.uk/images/CoolBluespic.jpg"
    }, {
        "id": "3",
        "title": "Gospal",
        "text": "After the end of slavery and the introduction of blues, churches switched to a more modernized version of song. It brought together 'shout' songs from Prais Houses. The rythms were upbeat and optimistic.",
        "img": "https://s3.amazonaws.com/photos.geni.com/p13/5d/ee/96/8e/5344483999e4a2ee/gospel-music-praise_large.jpg"
    }, {
        "id": "4",
        "title": "Jazz",
        "text": "Jazz was born from the Blues, and its birthplace is New Orleans. The basis of Jazz is syncopation - variety of rhythms which are in some way unexpected which make part or all of a tune or piece of music off-beat. Jazz is a combination of African and European music.",
        "img": "http://i.ebayimg.com/images/g/gZwAAOxy1RZSXM~5/s-l300.jpg"
    }, {
        "id": "5",
        "title": "RnB and Rock n' Roll",
        "text": "Rhythm and Blues (RnB) is the early form of Rock n Roll, and is a combination of Blues and Country music. It was soon adopted by young people for dancing. In the 1960s it was widly popular around the world.",
        "img": "http://bayinghoundales.com/wp-content/uploads/2014/05/icon-rock-n-roll-guitarist.png"
    }, {
        "id": "6",
        "title": "Soul",
        "text": "the smooth sound of RnB led to the birth of Soul music. In the 60s, Motown record label was established and featured lots of black Soul singers",
        "img": "https://s-media-cache-ak0.pinimg.com/236x/ab/0e/62/ab0e6256a6c62709e308ceebd318ba23.jpg"
    }, {
        "id": "7",
        "title": "Hip Hop and Rap",
        "text": "Hip Hop and Rap were born in the 1970s when young people began to record beats. These can be tracked back to Africa, where storytellers told stories to the rhythm of a drum. Hip Hop and Rap are based on drumming, hard beats, improvision and strorytelling",
        "img": "http://lordlav.com/wp-content/uploads/2014/09/Rap-Pic-Mic-150x150.png"
    }

];


class TimelineBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = { steps: json }
    }

    render() {
        const steps = this._getSteps() || [];
        return (
            <div className="Timeline-Box">
                <h1>African-American Music History</h1>
                <div className="step-list">
                    {steps}
                </div>
            </div>
        );
    }

    _getSteps() {
        return this.state.steps.map((step) => {
            return (
                <Step text={step.text} key={step.id} title={step.title} img={step.img} id={'item' + step.id} />
            );
        });

    }
}

class Step extends React.Component {
    render() {
        return (

            <div id={this.props.id} className="animate-item" ref="step">
                <input type="checkbox" />
                <div className="circle">
                    <img src={this.props.img} alt="" />
                </div>
                <div className="content-box">
                    <div className="inner-content-box">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        );
    }



}

ReactDOM.render(<TimelineBox/>, document.getElementById("wrapper"));