import React from 'react';
import './App.css';
import ReactCardFlip from 'react-card-flip';
import Carousel from 'react-elastic-carousel';



class App extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false,
      word1: 'Word 1',
      def1: 'Definition 1',
      word2: 'Word 2',
      def2: 'Definition 2',
      word3: 'Word 3',
      def3: 'Definition 3',
      word4: 'Word 4',
      def4: 'Definition 4',
      word5: 'Word 5',
      def5: 'Definition 5',
      word6: 'Word 6',
      def6: 'Definition 6',
      word7: 'Word 7',
      def7: 'Definition 7',
      word8: 'Word 8',
      def8: 'Definition 8',
      word9: 'Word 9',
      def9: 'Definition 9',
      word10: 'Word 10',
      def10: 'Definition 10',
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
          <div class="container">
            <h1>{this.state.word1}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def1}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word2}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def2}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word3}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def3}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word4}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def4}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word5}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def5}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word6}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def6}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word7}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def7}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word8}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def8}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word9}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def9}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word10}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def10}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>
      <ReactCardFlip isFlipped="false" flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>Passage</h1>
            <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.</p>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h1>Passage</h1>
            <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.</p>
          </div>
        </div>
      </ReactCardFlip>
</Carousel>

      </div>
    )
  }
}

export default App;
