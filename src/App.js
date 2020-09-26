import React from 'react';
import './App.css';
import ReactCardFlip from 'react-card-flip';
import Carousel from 'react-elastic-carousel';



class App extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (

      <div>
      <Carousel itemsToScroll={1} itemsToShow={1}>
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div >
            <h1>Word</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
          </div>

          <div class="card">
            <div >
              <h1>Definition</h1>
              <p>One of the reasons that flexbox quickly caught the interest of web developers is that it brought proper alignment capabilities to the web for the first time. It enabled proper vertical alignment, so we can at last easily center a box. In this guide, we will take a thorough look at how the alignment and justification properties work in Flexbox.</p>

              <button onClick={this.handleClick}>Click to flip</button>
            </div>
            </div>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1><b>Word</b></h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.</p>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>
      </ReactCardFlip>
</Carousel>




      </div>
    )
  }
}

export default App;
