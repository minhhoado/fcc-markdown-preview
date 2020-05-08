import React from "react";
import marked from "marked";

const initialState = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com)

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)


`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return (
      <div>
        <h2 className="text-center mt-4">Convert your markdown</h2>
        <div className="row">
          <div className="col-6">
            <textarea
              className="form-control p-2"
              id="editor"
              cols="30"
              rows="10"
              value={text}
              onChange={this.handleChange}
              placeholder="Write your markdown"
            ></textarea>
          </div>
          <div
            className="col-6 preview rounded p-2"
            dangerouslySetInnerHTML={{ __html: markdown }}
            id="preview"
          />
        </div>
      </div>
    );
  }
}

export default App;
