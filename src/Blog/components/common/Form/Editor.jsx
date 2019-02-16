import React from 'react';
import * as Showdown from "showdown";
import ReactMde from "react-mde"
import "react-mde/lib/styles/css/react-mde-all.css";
import "draft-js/dist/Draft.css";
import Script from 'react-load-script'
import {connect} from "react-redux";
import {savePost} from "../../../actions/post";
import cuid from "cuid";
import {POST_SAVING_INTERVAL} from "../../../instant";


const mapActionToProps = {
    savePost,
}

class Editor extends React.Component {
    componentDidMount() {
        const {savePost} = this.props;
        this.autoSavePost = setInterval(() => savePost(this.state.content, this.state.id), POST_SAVING_INTERVAL);
    }

    componentWillUnmount() {
        clearInterval(this.autoSavePost);
    }

    handleScriptLoaded = () => {
        this.setState({scriptLoaded: true})
    }

    constructor(props) {
        super(props);
        this.state = {
            id: cuid(),
            content: "", // initial value
            scriptLoaded: false
        };
        this.converter = new Showdown.Converter({
            tables: true,
            simplifiedAutoLink: true
        });
    }

    handleValueChange = (value) => {
        this.setState({content: value});
    };

    render() {

        return (
            <div className="container">
                <Script
                    url="https://use.fontawesome.com/releases/v5.0.6/js/all.js"
                    onLoad={this.handleScriptLoaded}
                />

                {this.state.scriptLoaded && <ReactMde
                    onChange={this.handleValueChange}
                    value={this.state.value}
                    generateMarkdownPreview={markdown =>
                        Promise.resolve(this.converter.makeHtml(markdown))
                    }
                />}
            </div>
        );
    }
}


export default connect(undefined, mapActionToProps)(Editor);