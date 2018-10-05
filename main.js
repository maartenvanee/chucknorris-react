"use strict";

const e = React.createElement;

class JokeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['een', 'twee', 'drie']
        };
    }

    render() {
        return e(
            "div",
            [],
            e("h3", [],this.props.title),
            e("ul", [],
                this.state.data.map(function (p, i) {
                    return React.createElement(
                        "li",
                        null,
                        `Joke ${i + 1}`
                    );
                })
            )
        );
    }
}

// Find all DOM containers, and render JokeList Components into them.
document.querySelectorAll(".list").forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const title = domContainer.dataset.title;
    ReactDOM.render(e(JokeList, { title: title }), domContainer);
});
